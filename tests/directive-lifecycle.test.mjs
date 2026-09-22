import assert from "node:assert/strict";
import test from "node:test";
import { vDebounce } from "../src/directives/click-debounce/index.ts";
import { vThrottle } from "../src/directives/click-throttle/index.ts";

const element = () => {
	const listeners = new Map();
	return {
		disabled: false,
		addEventListener: (type, callback) => listeners.set(type, callback),
		removeEventListener: (type, callback) => {
			if (listeners.get(type) === callback) listeners.delete(type);
		},
		click: () => listeners.get("click")?.(),
		listenerCount: () => listeners.size,
	};
};

test("throttle keeps its unlock timer across repeated synthetic clicks", (t) => {
	t.mock.timers.enable({ apis: ["setTimeout"] });
	const el = element();
	let calls = 0;
	vThrottle.mounted(el, {
		value: () => {
			calls++;
		},
	});
	el.click();
	el.click();
	assert.equal(calls, 1);
	assert.equal(el.disabled, true);
	t.mock.timers.tick(1000);
	assert.equal(el.disabled, false);
	vThrottle.beforeUnmount(el);
});

test("throttle releases disabled state even when a callback throws", (t) => {
	t.mock.timers.enable({ apis: ["setTimeout"] });
	const el = element();
	const error = new Error("callback failed");
	vThrottle.mounted(el, {
		value: () => {
			throw error;
		},
	});
	assert.throws(
		() => el.click(),
		(actual) => actual === error
	);
	t.mock.timers.tick(1000);
	assert.equal(el.disabled, false);
	vThrottle.beforeUnmount(el);
});

test("throttle uses updated callbacks and releases its resources on unmount", (t) => {
	t.mock.timers.enable({ apis: ["setTimeout"] });
	const el = element();
	const calls = [];
	vThrottle.mounted(el, { value: () => calls.push("old") });
	vThrottle.updated(el, { value: () => calls.push("new") });
	el.click();
	vThrottle.beforeUnmount(el);
	t.mock.timers.tick(1000);
	assert.deepEqual(calls, ["new"]);
	assert.equal(el.disabled, false);
	assert.equal(el.listenerCount(), 0);
	assert.equal(el.__throttle_timer__, undefined);
});

test("synchronous unmount from a throttle callback cannot recreate a timer", (t) => {
	t.mock.timers.enable({ apis: ["setTimeout"] });
	const el = element();
	vThrottle.mounted(el, { value: () => vThrottle.beforeUnmount(el) });
	el.click();
	assert.equal(el.disabled, false);
	assert.equal(el.__throttle_timer__, undefined);
	assert.equal(el.listenerCount(), 0);
});

test("debounce cancels the pending callback on unmount", (t) => {
	t.mock.timers.enable({ apis: ["setTimeout"] });
	const el = element();
	let calls = 0;
	const vnode = {
		props: {
			onClick: () => {
				calls++;
			},
		},
	};
	vDebounce.created(el, {}, vnode);
	vnode.props.onClick();
	vDebounce.beforeUnmount(el);
	t.mock.timers.tick(500);
	assert.equal(calls, 0);
	assert.equal(el.__debounce_timer__, undefined);
});

test("debounce keeps the most recent click arguments", (t) => {
	t.mock.timers.enable({ apis: ["setTimeout"] });
	const el = element();
	const calls = [];
	const vnode = { props: { onClick: (value) => calls.push(value) } };
	vDebounce.created(el, {}, vnode);
	vnode.props.onClick("first");
	vnode.props.onClick("last");
	t.mock.timers.tick(500);
	assert.deepEqual(calls, ["last"]);
	vDebounce.beforeUnmount(el);
});
