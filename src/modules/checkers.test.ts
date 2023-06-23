import {
	isNumber, isString, isFunction, isArray
} from './checkers';

describe('IsString', () => {
	test('returns true with string value is specified', () => {
		expect(isString('roman')).toBe(true);
		expect(isString('')).toBe(true);
	});

	test('works correctly with string is specified and excludeFalsy argument is true', () => {
		expect(isString('roman', true)).toBe(true);
		expect(isString('', true)).toBe(false);
	});

	test('returns false with non-string value is specified', () => {
		expect(isString(123)).toBe(false);
		expect(isString(0, true)).toBe(false);
		expect(isString(true)).toBe(false);
		expect(isString(NaN)).toBe(false);
		expect(isString(null)).toBe(false);
		expect(isString(undefined)).toBe(false);
		expect(isString([])).toBe(false);
		expect(isString([ 'a', 'b' ])).toBe(false);
		expect(isString({})).toBe(false);
		expect(isString({
			a: 'a',
			b: 'b',
		})).toBe(false);
		// @ts-ignore
		expect(isString()).toBe(false);
	});
});

describe('IsNumber', () => {
	test('returns true with number value is specified', () => {
		expect(isNumber(123)).toBe(true);
		expect(isNumber(0)).toBe(true);
		expect(isNumber(NaN)).toBe(true);
	});

	test('works correctly with number is specified and excludeNaN argument is true', () => {
		expect(isNumber(123, true)).toBe(true);
		expect(isNumber(0, true)).toBe(true);
		expect(isNumber(NaN, true)).toBe(false);
	});

	test('returns false when non-number value is specified', () => {
		expect(isNumber('roman')).toBe(false);
		expect(isNumber('', true)).toBe(false);
		expect(isNumber(true)).toBe(false);
		expect(isNumber(false)).toBe(false);
		expect(isNumber(null)).toBe(false);
		expect(isNumber(undefined)).toBe(false);
		expect(isNumber([])).toBe(false);
		expect(isNumber([ 'a', 'b' ])).toBe(false);
		expect(isNumber({})).toBe(false);
		expect(isNumber({
			a: 'a',
			b: 'b',
		})).toBe(false);
		// @ts-ignore
		expect(isNumber()).toBe(false);
	});
});

describe('IsFunction', () => {
	test('returns true if function is specified', () => {
		expect(isFunction(() => {
			return true;
		})).toBe(true);
		expect(isFunction(() => {
			return false;
		})).toBe(true);
	});

	test('returns false when non-functional value is specified', () => {
		expect(isFunction('roman')).toBe(false);
		expect(isFunction('')).toBe(false);
		expect(isFunction(123)).toBe(false);
		expect(isFunction(0)).toBe(false);
		expect(isFunction(true)).toBe(false);
		expect(isFunction(false)).toBe(false);
		expect(isFunction(null)).toBe(false);
		expect(isFunction(undefined)).toBe(false);
		expect(isFunction([])).toBe(false);
		expect(isFunction([ 'a', 'b' ])).toBe(false);
		expect(isFunction({})).toBe(false);
		expect(isFunction({
			a: 'a',
			b: 'b',
		})).toBe(false);
		// @ts-ignore
		expect(isFunction()).toBe(false);
	});
});

describe('IsArray', () => {
	test('returns true with array is specified', () => {
		expect(isArray([ 1, 2 ])).toBe(true);
		expect(isArray([])).toBe(true);
	});

	test('works correctly with array is specified and excludeEmpty argument is true', () => {
		expect(isArray([ 1, 2 ], true)).toBe(true);
		expect(isArray([], true)).toBe(false);
	});

	test('returns false when non-array value is specified', () => {
		expect(isArray('roman')).toBe(false);
		expect(isArray('', true)).toBe(false);
		expect(isArray(123)).toBe(false);
		expect(isArray(0, true)).toBe(false);
		expect(isArray(true)).toBe(false);
		expect(isArray(false)).toBe(false);
		expect(isArray(null)).toBe(false);
		expect(isArray(undefined)).toBe(false);
		expect(isArray({})).toBe(false);
		expect(isArray({
			a: 'a',
			b: 'b',
		})).toBe(false);
		// @ts-ignore
		expect(isArray()).toBe(false);
	});
});
