import type {
	FC,
	ForwardRefExoticComponent,
	RefAttributes,
	HTMLInputTypeAttribute,
	ReactNode,
	HTMLAttributeAnchorTarget,
	ChangeEvent
} from 'react';

/**
 * Type for component
 * P - props interface
 * R - ref type
 */
export type TComponent<P, R = undefined> = R extends undefined
	? FC<P>
	: ForwardRefExoticComponent<P & RefAttributes<R>>;

/*
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
 * Type for link target attribute
 */
export type TLinkTarget = HTMLAttributeAnchorTarget;

export type TInputElement = HTMLInputElement;
export type TTextAreaElement = HTMLTextAreaElement;

/**
 * Type for input type attribute
 */
export type TInputType = HTMLInputTypeAttribute;

/**
 * Type for button ref
 */
export type TButtonRef = HTMLButtonElement;

export type TEventChange = ChangeEvent<TInputElement & TTextAreaElement>;

/**
 * Generic type for numeric range started with START, ended with END
 * and with step equals 1
 */
export type TNumericRange<
	START extends number,
	END extends number,
	ARR extends unknown[] = [],
	ACC extends number = never
> = ARR['length'] extends END
	? ACC | START | END
	: TNumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>
