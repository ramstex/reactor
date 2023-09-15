import { useMediaQuery } from 'react-responsive';
import { EMediaOrientations, EMediaDevices, EMediaBreakpoints } from './helper';

import type { TUseMedia, TMediaConfig, TMediaChecker } from './types';

const config: TMediaConfig = {
	breakpoints: {
		[ EMediaDevices.mobile ]: {
			[ EMediaBreakpoints.sm ]: 360,
			[ EMediaBreakpoints.md ]: 512,
			[ EMediaBreakpoints.lg ]: 640,
		},

		[ EMediaDevices.tablet ]: {
			[ EMediaBreakpoints.sm ]: 768,
			[ EMediaBreakpoints.md ]: 920,
			[ EMediaBreakpoints.lg ]: 1024,
		},

		[ EMediaDevices.desktop ]: {
			[ EMediaBreakpoints.sm ]: 1280,
			[ EMediaBreakpoints.md ]: 1440,
			[ EMediaBreakpoints.lg ]: 1680,
		},
	},

	defaults: {
		device: EMediaDevices.desktop,
		segment: EMediaBreakpoints.sm,
	},
}

const getBreakpoint = ( settings = {
	device: config.defaults.device,
	segment: config.defaults.segment,
} ) => {
	return config.breakpoints[ settings.device ][ settings.segment ];
};

//	Размеры вьюпорта
const minBreakpoint = ( settings = {
	device: config.defaults.device,
	segment: config.defaults.segment,
} ) => {
	return { minWidth: getBreakpoint( settings ) };
};

const maxBreakpoint = ( settings = {
	device: config.defaults.device,
	segment: config.defaults.segment,
} ) => {
	return { maxWidth: getBreakpoint( settings ) - 1 };
};

const useMedia: TUseMedia = () => {
	/**
	 * isMedia uses useMediaQuery method to determine, if media-query with provided settings successfully executes
	 * @param { TMediaCheck } settings - media-query settings.
	 * @return { boolean } - true, if media-query successfully executes.
	 */
	const isMedia: TMediaChecker = ( settings ) => {
		return useMediaQuery( settings );
	};

	//	Devices
	const isMobile = isMedia( maxBreakpoint( {
		device: EMediaDevices.tablet,
		segment: EMediaBreakpoints.sm,
	} ) );

	const isTablet = isMedia( {
		...minBreakpoint( {
			device: EMediaDevices.tablet,
			segment: EMediaBreakpoints.sm,
		} ),
		...maxBreakpoint( {
			device: EMediaDevices.desktop,
			segment: EMediaBreakpoints.sm,
		} ),
	} );

	const isDesktop = isMedia( minBreakpoint( {
		device: EMediaDevices.desktop,
		segment: EMediaBreakpoints.sm,
	} ) );

	// Orientations
	const isLandscape = isMedia( { orientation: EMediaOrientations.landscape } );
	const isPortrait = isMedia( { orientation: EMediaOrientations.portrait } );

	return {
		isMobile,
		isTablet,
		isDesktop,

		isLandscape,
		isPortrait,
	};
}

export default useMedia;
