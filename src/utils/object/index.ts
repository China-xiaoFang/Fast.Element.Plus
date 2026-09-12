/** 返回值对应的内建对象标签。 */
const getObjectTag = (value: object): string => Object.prototype.toString.call(value);

/** 判断两个值是否相等，并将 `NaN` 视为相等。 */
const isSameValue = (left: unknown, right: unknown): boolean =>
	left === right || (typeof left === "number" && typeof right === "number" && Number.isNaN(left) && Number.isNaN(right));

/** 返回对象自身可枚举的字符串键和 Symbol 键。 */
const getEnumerableKeys = (value: object): PropertyKey[] =>
	Reflect.ownKeys(value).filter((key) => Object.prototype.propertyIsEnumerable.call(value, key));

/** 比较 ArrayBuffer 或视图所覆盖的二进制内容。 */
const isBinaryEqual = (
	left: ArrayBufferLike,
	leftOffset: number,
	leftLength: number,
	right: ArrayBufferLike,
	rightOffset: number,
	rightLength: number
): boolean => {
	if (leftLength !== rightLength) return false;
	const leftBytes = new Uint8Array(left, leftOffset, leftLength);
	const rightBytes = new Uint8Array(right, rightOffset, rightLength);
	return leftBytes.every((value, index) => value === rightBytes[index]);
};

/** 深度比较内部实现；两个栈用于识别循环引用。 */
const compare = (left: unknown, right: unknown, leftStack: object[], rightStack: object[]): boolean => {
	if (isSameValue(left, right)) return true;
	if (typeof left !== "object" || left === null || typeof right !== "object" || right === null) return false;

	const leftCycleIndex = leftStack.lastIndexOf(left);
	if (leftCycleIndex >= 0) return rightStack[leftCycleIndex] === right;
	if (rightStack.includes(right)) return false;

	const leftTag = getObjectTag(left);
	if (leftTag !== getObjectTag(right)) return false;

	leftStack.push(left);
	rightStack.push(right);
	try {
		if (ArrayBuffer.isView(left) || ArrayBuffer.isView(right)) {
			return (
				ArrayBuffer.isView(left) &&
				ArrayBuffer.isView(right) &&
				isBinaryEqual(left.buffer, left.byteOffset, left.byteLength, right.buffer, right.byteOffset, right.byteLength)
			);
		}

		switch (leftTag) {
			case "[object Array]": {
				const leftArray = left as unknown[];
				const rightArray = right as unknown[];
				return (
					leftArray.length === rightArray.length &&
					leftArray.every((value, index) => compare(value, rightArray[index], leftStack, rightStack))
				);
			}
			case "[object ArrayBuffer]": {
				const leftBuffer = left as ArrayBuffer;
				const rightBuffer = right as ArrayBuffer;
				return isBinaryEqual(leftBuffer, 0, leftBuffer.byteLength, rightBuffer, 0, rightBuffer.byteLength);
			}
			case "[object BigInt]":
			case "[object Boolean]":
			case "[object Number]":
			case "[object String]":
			case "[object Symbol]":
				return isSameValue(left.valueOf(), right.valueOf());
			case "[object Date]":
				return isSameValue((left as Date).getTime(), (right as Date).getTime());
			case "[object Error]": {
				const leftError = left as Error;
				const rightError = right as Error;
				return leftError.name === rightError.name && leftError.message === rightError.message;
			}
			case "[object Map]": {
				const leftMap = left as Map<unknown, unknown>;
				const rightEntries = [...(right as Map<unknown, unknown>).entries()];
				if (leftMap.size !== rightEntries.length) return false;
				const matchedIndexes = new Set<number>();
				for (const [leftKey, leftValue] of leftMap) {
					const matchIndex = rightEntries.findIndex(
						([rightKey, rightValue], index) =>
							!matchedIndexes.has(index) &&
							compare(leftKey, rightKey, leftStack, rightStack) &&
							compare(leftValue, rightValue, leftStack, rightStack)
					);
					if (matchIndex < 0) return false;
					matchedIndexes.add(matchIndex);
				}
				return true;
			}
			case "[object RegExp]": {
				const leftRegExp = left as RegExp;
				const rightRegExp = right as RegExp;
				return leftRegExp.source === rightRegExp.source && leftRegExp.flags === rightRegExp.flags;
			}
			case "[object Set]": {
				const leftSet = left as Set<unknown>;
				const rightValues = [...(right as Set<unknown>).values()];
				if (leftSet.size !== rightValues.length) return false;
				const matchedIndexes = new Set<number>();
				for (const leftValue of leftSet) {
					const matchIndex = rightValues.findIndex(
						(rightValue, index) => !matchedIndexes.has(index) && compare(leftValue, rightValue, leftStack, rightStack)
					);
					if (matchIndex < 0) return false;
					matchedIndexes.add(matchIndex);
				}
				return true;
			}
			case "[object Object]": {
				if (Object.getPrototypeOf(left) !== Object.getPrototypeOf(right)) return false;
				const leftKeys = getEnumerableKeys(left);
				const rightKeys = getEnumerableKeys(right);
				if (leftKeys.length !== rightKeys.length || leftKeys.some((key) => !rightKeys.includes(key))) return false;
				const leftRecord = left as Record<PropertyKey, unknown>;
				const rightRecord = right as Record<PropertyKey, unknown>;
				return leftKeys.every((key) => compare(leftRecord[key], rightRecord[key], leftStack, rightStack));
			}
			default:
				return false;
		}
	} finally {
		leftStack.pop();
		rightStack.pop();
	}
};

/** 深度比较两个值，支持常见对象、集合、二进制数据与循环引用。 */
export const isEqual = (left: unknown, right: unknown): boolean => compare(left, right, [], []);

/** 从对象中选择指定的自身属性。 */
export function pick<Source extends object, Key extends keyof Source>(source: Source, keys: readonly Key[]): Pick<Source, Key>;
export function pick<Source extends object>(source: Source, keys: readonly PropertyKey[]): Partial<Source>;
export function pick(source: object, keys: readonly PropertyKey[]): object {
	const sourceRecord = source as Record<PropertyKey, unknown>;
	const result: Record<PropertyKey, unknown> = {};
	for (const key of keys) {
		if (Object.hasOwn(source, key)) result[key] = sourceRecord[key];
	}
	return result;
}

/** 从对象中排除指定的自身属性。 */
export function omit<Source extends object, Key extends keyof Source>(source: Source, keys: readonly Key[]): Omit<Source, Key>;
export function omit<Source extends object>(source: Source, keys: readonly PropertyKey[]): Partial<Source>;
export function omit(source: object, keys: readonly PropertyKey[]): object {
	const omittedKeys = new Set<PropertyKey>(keys);
	const sourceRecord = source as Record<PropertyKey, unknown>;
	const result: Record<PropertyKey, unknown> = {};
	for (const key of getEnumerableKeys(source)) {
		if (!omittedKeys.has(key)) result[key] = sourceRecord[key];
	}
	return result;
}
