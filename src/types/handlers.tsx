import type {
	MouseEventHandler,
	FormEvent,
	ChangeEvent
} from 'react';

/**
 * Generic type for component onClick handler
 */
export type TOnClick<T> = MouseEventHandler<T>;

export type TFormEvent = FormEvent<HTMLFormElement>;

export type TOnSubmit = ( event?: TFormEvent ) => void;
export type TOnInvalid = ( event?: TFormEvent ) => void;
