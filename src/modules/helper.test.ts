import { capitalize } from './helper';

describe('Capitalize', () => {
	test('is processing string correctly', () => {
		expect(capitalize('roman')).toBe('Roman');
	});

	test('is processing converting wrong types correctly', () => {
		// @ts-ignore
		expect(capitalize(123)).toBe('123');
		// @ts-ignore
		expect(capitalize(false)).toBe('False');
		// @ts-ignore
		expect(capitalize(NaN)).toBe('NaN');
		// @ts-ignore
		expect(capitalize(null)).toBe('Null');
		// @ts-ignore
		expect(capitalize(undefined)).toBe('Undefined');
		// @ts-ignore
		expect(capitalize([ 'a', 'b' ])).toBe('A,b');
		// @ts-ignore
		expect(capitalize({ a: 'b' })).toBe('[object Object]');
	});
});
