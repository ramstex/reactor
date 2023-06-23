/**
 * Checks if specified value has a string type
 * @param {unknown} value - a value for check
 * @param {boolean} [excludeFalsy] - if true, function will return false for falsy values of value argument
 * @returns {boolean} - checking result
 */
export const isString: (value: unknown, excludeFalsy?: boolean) => boolean = (value, excludeFalsy) => {
	const isType = typeof value === 'string';

	return excludeFalsy
		? isType && !!value
		: isType;
}

/**
 * Checks if specified value has a number type
 * @param {unknown} value - a value for check
 * @param {boolean} [excludeNaN] - if true, function will return false for NaN value specified
 * @returns {boolean} - checking result
 */
export const isNumber: (value: unknown, excludeFalsy?: boolean) => boolean = (value, excludeNaN) => {
	const isType = typeof value === 'number';

	return excludeNaN
		? isType && !isNaN(value)
		: isType;
}

/**
 * Checks if specified value is a function
 * @param {unknown} value - a value for check
 * @returns {boolean} - checking result
 */
export const isFunction: (value: unknown) => boolean = (value) => {
	return !!value && typeof value === 'function';
}

/**
 * Checks if specified value is an array
 * @param {unknown} value - a value for check
 * @param {boolean} [excludeEmpty] - if true, function will return false for empty array specified
 * @returns {boolean} - checking result
 */
export const isArray: (value: unknown, excludeEmpty?: boolean) => boolean = (value, excludeEmpty) => {
	const isType = Array.isArray(value);

	return excludeEmpty
		? isType && !!value.length
		: isType;
}
