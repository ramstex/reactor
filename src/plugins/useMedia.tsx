import { useMediaQuery } from 'react-responsive';

const config = {
	breakpoints: {
		mobile: {
			sm: 360,
			md: 512,
			lg: 640,
		},
		tablet: {
			sm: 768,
			md: 920,
			lg: 1024,
		},
		desktop: {
			sm: 1280,
			md: 1440,
			lg: 1680,
		},
	},
	defaults: {
		device: 'desktop',
		segment: 'sm',
		unit: 'px',
	},
}

const breakpoint = ( device = config.defaults.device, segment = config.defaults.segment ) => {
	// @ts-ignore
	return config.breakpoints[ device ][ segment ];
};

//	Размеры вьюпорта
const minBreakpoint = ( device = config.defaults.device, segment = config.defaults.segment ) => {
	return { minWidth: breakpoint( device, segment ) };
};

const maxBreakpoint = ( device = config.defaults.device, segment = config.defaults.segment ) => {
	return { maxWidth: breakpoint( device, segment ) - 1 };
};

export default function useMedia() {
	/**
	 * isMedia с помощью метода useMediaQuery определяет, выполняется ли медиа-запрос с переданными параметрами.
	 * @param { Object } settings  - параметры медиа-запроса для проверки.
	 * @return { boolean } - true, если медиа-запрос выполняется, и false, если не выполняется.
	 */
	// @ts-ignore
	const isMedia = ( settings ) => {
		return useMediaQuery( settings );
	};

	//	Устройства
	const isMobile = isMedia( maxBreakpoint( 'tablet', 'sm' ) );
	const isTablet = isMedia( {
		...minBreakpoint( 'tablet', 'sm' ),
		...maxBreakpoint( 'desktop', 'sm' ),
	} );
	const isDesktop = isMedia( minBreakpoint( 'desktop', 'sm' ) );

	// Ориентация
	const isLandscape = isMedia( { orientation: 'landscape' } );
	const isPortrait = isMedia( { orientation: 'portrait' } );

	return {
		isMobile,
		isTablet,
		isDesktop,

		isLandscape,
		isPortrait,
	};
}
