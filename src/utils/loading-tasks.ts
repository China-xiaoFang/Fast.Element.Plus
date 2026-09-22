/** 组件内部异步任务的 Loading 所有权集合，不作为公共包入口导出。 */
export function createLoadingTasks(notify: (loading: boolean, text?: string) => void): {
	begin: (text?: string) => () => void;
	dispose: () => void;
} {
	const tasks = new Map<symbol, string | undefined>();
	let disposed = false;
	const update = (): void => {
		let text: string | undefined;
		// 显示最后启动且尚未结束的任务文案。
		for (const value of tasks.values()) text = value;
		notify(tasks.size > 0, text);
	};
	return {
		begin(text) {
			if (disposed) return () => undefined;
			const owner = Symbol();
			tasks.set(owner, text);
			update();
			return () => {
				// 旧任务、重复 done 和卸载后的回调均不能移除其他任务。
				if (!disposed && tasks.delete(owner)) update();
			};
		},
		dispose() {
			if (disposed) return;
			disposed = true;
			tasks.clear();
			notify(false);
		},
	};
}
