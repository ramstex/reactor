import type { HTMLInputTypeAttribute, MouseEventHandler, ReactNode } from 'react';

/**
 * Interface for props with children
 */
export interface IPropChildren {
	children?: ReactNode,
}

/**
 * Interface for props with className
 */
export interface IPropClassName {
	className?: string,
}

/**
 * Common interface for component props
 */
export interface IComponentProps extends IPropChildren, IPropClassName {}

/**
 * Union type for flex alignment variants
 */
export type TFlexAlignment = 'start' | 'end' | 'center' | 'stretch' | 'between' | 'around';

/**
 * Type for input ref
 */
export type TInputRef = HTMLInputElement & HTMLTextAreaElement;

/**
 * Type for input type attribute
 */
export type TInputType = HTMLInputTypeAttribute;

/**
 * Type for button ref
 */
export type TButtonRef = HTMLButtonElement;

/**
 * Union type for button template
 */
export type TButtonTemplate = 'ghost' | 'link';

/**
 * Generic type for component onClick handler
 */
export type TOnClick<T> = MouseEventHandler<T>;

/**
 * Union type for ui element state
 */
export type TUiState = 'success' | 'error';

/**
 * Union type for ui element theme
 */
export type TUiTheme = 'inverse' | 'primary' | 'secondary';

/**
 * Type for grid columns prop
 */
export type TCols = NumericRange<1, 12> | 'auto';

/**
 * Generic type for numeric range started with START, ended with END
 * and with step equals 1
 */
export type NumericRange<
	START extends number,
	END extends number,
	ARR extends unknown[] = [],
	ACC extends number = never
> = ARR['length'] extends END
	? ACC | START | END
	: NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>

/**
 * Returns an original string with first letter capitalized.
 * @param {string} s - original string
 * @returns {string} - string with first letter capitalized
 */
export const capitalize = (s: string): string => {
	try {
		const sArr = String(s).split('');
		sArr[0] = sArr[0].toUpperCase();

		return sArr?.join('');
	} catch(error: unknown) {
		throw new Error(String(error));
	}
}
