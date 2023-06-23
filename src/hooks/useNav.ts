// ToDo: tests for iterateNav function

import { capitalize } from '../modules/helper';
import _NAV from '../../config/nav';

/**
 * Interface for nav route object
 */
export interface INavRoute {
	readonly key: string,
	readonly title?: string,
	readonly path: string,
	readonly children?: INavRoute[],
}

/**
 * Interface for nav routes map
 */
export interface INavMap {
	[key: string]: string,
}

/**
 * Interface for nav object
 */
export interface INav {
	routes: INavMap,
}

/**
 * Iterates specified nav routes list and creates a map of paths
 * @param {INavRoute[]} list=_NAV - nav routes list
 * @param {INavRoute} [parent] - parent route for specified nav routes list
 * @returns {INavMap} - map of paths
 */
const iterateNav = (list: INavRoute[] = _NAV, parent?: INavRoute): INavMap => {
	let result: INavMap = {};

	list.forEach((u) => {
		const key: string = parent
			? `${ parent.key }${ capitalize(u.key) }`
			: u.key;
		const path: string = parent
			? `${ parent.path }${ u.path }`
			: u.path;

		result[key] = path;

		if (u.children?.length) {
			result = {
				...result,
				...iterateNav(u.children, {
					key,
					path,
				}),
			}
		}
	});

	return result;
};

export default function useNav(): INav {
	return { routes: iterateNav() };
}
