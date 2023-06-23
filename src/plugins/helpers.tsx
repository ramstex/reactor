export function isAbsoluteUrl( url = '' ) {
	const list = [ 'http://', 'https://', 'ftp://', 'ssh://' ];

	return !!list.find( ( item ) => {
		return url.indexOf( item ) === 0;
	} );
}

export function getChildrenByKey( children = [], key = null ) {
	if ( !!children && 'length' in children ) {
		return children.reduce( ( prev, curr ) => {
			// @ts-ignore
			if ( curr.key === key ) {
				prev.push( curr );
			}

			return prev;
		}, [] );
	}

	// @ts-ignore
	return children.key === key
		? children
		: undefined;
}

export function isFunction( func: () => void ) {
	return typeof func === 'function';
}

/**
 * Returns an original string with first letter capitalized.
 * @param {string} s - original string
 * @returns {string} - string with first letter capitalized
 */
export const capitalize = ( s: string ): string => {
	try {
		const sArr = String( s ).split( '' );
		sArr[0] = sArr[0].toUpperCase();

		return sArr?.join( '' );
	} catch( error: unknown ) {
		throw new Error( String( error ) );
	}
}
