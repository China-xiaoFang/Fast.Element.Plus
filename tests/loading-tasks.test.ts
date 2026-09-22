import assert from "node:assert/strict";
import test from "node:test";
import { debounce } from "../src/utils/async";
import { createLoadingTasks } from "../src/utils/loading-tasks";

test("independent loading owners preserve older work and text after a newer task ends", () => {
	const states: [boolean, string | undefined][] = [];
	const scope = createLoadingTasks((active, text) => states.push([active, text]));
	const first = scope.begin("first");
	const second = scope.begin("second");
	second();
	assert.deepEqual(states.at(-1), [true, "first"]);
	second();
	assert.deepEqual(states.at(-1), [true, "first"]);
	first();
	assert.deepEqual(states.at(-1), [false, undefined]);
});

test("dispose releases once and late completions cannot change a new scope", () => {
	let releases = 0;
	const scope = createLoadingTasks((active) => {
		if (!active) releases++;
	});
	const old = scope.begin();
	scope.dispose();
	old();
	scope.begin()();
	scope.dispose();
	assert.equal(releases, 1);
});

test("canceling a pending render settles all callers without executing the callback", async () => {
	let calls = 0;
	const render = debounce(() => {
		calls++;
	}, 300);
	const reason = new Error("component unmounted");
	const first = render();
	const second = render();
	const completion = Promise.allSettled([first, second]);
	render.cancel(reason);
	const results = await completion;
	assert.equal(calls, 0);
	assert.equal(render.pending(), false);
	for (const result of results) {
		assert.equal(result.status, "rejected");
		if (result.status === "rejected") assert.equal(result.reason, reason);
	}
});
