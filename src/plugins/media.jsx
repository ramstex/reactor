import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Config from '/config/media.json';

const breakpoint = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return Config.breakpoints[ device ][ segment ];
};

/**
 * isMedia с помощью метода useMediaQuery определяет, выполняется ли медиа-запрос с переданными параметрами.
 * @param { Object } settings  - параметры медиа-запроса для проверки.
 * @return { boolean } - true, если медиа-запрос выполняется, и false, если не выполняется.
 */
const isMedia = ( settings ) => {
	return useMediaQuery( settings );
};

//	Размеры вьюпорта
const minBreakpoint = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return { minWidth: breakpoint( device, segment ) };
};

const maxBreakpoint = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return { maxWidth: breakpoint( device, segment ) - 1 };
};

//	Устройства
const isMobile = () => {
	return isMedia( maxBreakpoint( 'tablet', 'sm' ) );
};

const isTablet = () => {
	return isMedia( {
		...minBreakpoint( 'tablet', 'sm' ),
		...maxBreakpoint( 'desktop', 'sm' ),
	} );
};

const isDesktop = () => {
	return isMedia( minBreakpoint( 'desktop', 'sm' ) );
};

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
	const isMediaDesktop = isDesktop();
	const isMediaTablet = isTablet();
	const isMediaMobile = isMobile();

	if ( values.hasOwnProperty( 'desktop' ) && isMediaDesktop ) {
		return values.desktop;
	}

	if ( values.hasOwnProperty( 'tablet' ) && isMediaTablet ) {
		return values.tablet;
	}

	if ( values.hasOwnProperty( 'mobile' ) && isMediaMobile ) {
		return values.mobile;
	}

	return defaultValue;
};

//	Ориентация
const isOrientation = ( orientation = 'landscape' ) => {
	return isMedia( { orientation } );
};

const isLandscape = () => {
	return isOrientation( 'landscape' );
};

const isPortrait = () => {
	return isOrientation( 'portrait' );
};

/**
 * getValueForOrientation возвращает значение в зависимости от ориентации экрана.
 * @param { Object } values - значения, которые должны быть возвращены для соответствующей ориентации экрана.
 * @param { *= } values.landscape - значение для горизонтального экрана
 * @param { *= } values.portrait - значение для вертикального экрана
 * @param { *= } defaultValue дефолтное значение, если ни одна из ориентаций не подходит.
 * @return - значение в зависимости от ориентации экрана.
 */
const getValueForOrientation = ( values, defaultValue ) => {
	const isMediaLandscape = isLandscape();
	const isMediaPortrait = isPortrait();

	if ( values.hasOwnProperty( 'landscape' ) && isMediaLandscape ) {
		return values.landscape;
	}

	if ( values.hasOwnProperty( 'portrait' ) && isMediaPortrait ) {
		return values.portrait;
	}

	return defaultValue;
};

const Media = {
	config: Config,
	breakpoint,
	isMedia,

	isMobile,
	isTablet,
	isDesktop,
	getValueForDevice,

	isOrientation,
	isLandscape,
	isPortrait,
	getValueForOrientation,
};

export default Media;
