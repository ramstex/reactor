import { useEffect, useRef } from 'react';
import type { TUsePrevious, TUsePreviousValue } from './types';

const usePrevious: TUsePrevious = ( value ) => {
	const ref = useRef<TUsePreviousValue>();

	useEffect( () => {
		ref.current = value;
	},[ value ] );

	return ref.current;
}
export default usePrevious;
