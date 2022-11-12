import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MediaConfig from '/config/media.json';

const breakpoint = ( device = MediaConfig.defaults.device, segment = MediaConfig.defaults.segment ) => {
	return MediaConfig.breakpoints[ device ][ segment ];
};

//	Размеры вьюпорта
const minBreakpoint = ( device = MediaConfig.defaults.device, segment = MediaConfig.defaults.segment ) => {
	return { minWidth: breakpoint( device, segment ) };
};

const maxBreakpoint = ( device = MediaConfig.defaults.device, segment = MediaConfig.defaults.segment ) => {
	return { maxWidth: breakpoint( device, segment ) - 1 };
};

export default function media() {
	/**
	 * isMedia с помощью метода useMediaQuery определяет, выполняется ли медиа-запрос с переданными параметрами.
	 * @param { Object } settings  - параметры медиа-запроса для проверки.
	 * @return { boolean } - true, если медиа-запрос выполняется, и false, если не выполняется.
	 */
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

	/**
	 * getValueForDevice возвращает значение в зависимости от устройства.
	 * @param { Object } values - значения, которые должны быть возвращены для соответствующих устройств.
	 * @param { *= } values.mobile - значение для телефонов
	 * @param { *= } values.tablet - значение для планшетов
	 * @param { *= } values.desktop - значение для десктопов
	 * @param { *= } defaultValue дефолтное значение, если ни одно из устройств не подходит.
	 * @return - значение в зависимости от устройства.
	 */
	const getValueForDevice = ( values, defaultValue ) => {
		if ( values.hasOwnProperty( 'desktop' ) && isDesktop ) {
			return values.desktop;
		}

		if ( values.hasOwnProperty( 'tablet' ) && isTablet ) {
			return values.tablet;
		}

		if ( values.hasOwnProperty( 'mobile' ) && isMobile ) {
			return values.mobile;
		}

		return defaultValue;
	};

	// Ориентация
	const isLandscape = isMedia( { orientation: 'landscape' } );
	const isPortrait = isMedia( { orientation: 'portrait' } );

	/**
	 * getValueForOrientation возвращает значение в зависимости от ориентации экрана.
	 * @param { Object } values - значения, которые должны быть возвращены для соответствующей ориентации экрана.
	 * @param { *= } values.landscape - значение для горизонтального экрана
	 * @param { *= } values.portrait - значение для вертикального экрана
	 * @param { *= } defaultValue дефолтное значение, если ни одна из ориентаций не подходит.
	 * @return - значение в зависимости от ориентации экрана.
	 */
	const getValueForOrientation = ( values, defaultValue ) => {

		if ( values.hasOwnProperty( 'landscape' ) && isLandscape ) {
			return values.landscape;
		}

		if ( values.hasOwnProperty( 'portrait' ) && isPortrait ) {
			return values.portrait;
		}

		return defaultValue;
	};

	return {
		isMobile,
		isTablet,
		isDesktop,
		getValueForDevice,

		isLandscape,
		isPortrait,
		getValueForOrientation,
	};
}
