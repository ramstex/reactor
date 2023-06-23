import type {
	MouseEventHandler,
	FormEvent
} from 'react';

/**
 * Generic type for component onClick handler
 */
export type TOnClick<T> = MouseEventHandler<T>;

export type IFormEvent = FormEvent<HTMLFormElement>;

export type TOnSubmit = ( event?: IFormEvent ) => void;
export type TOnInvalid = ( event?: IFormEvent ) => void;
