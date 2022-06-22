import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Config from '/config/media.json';

const breakpoint = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return Config.breakpoints[ device ][ segment ];
};

/**
 * isMedia с помощью метода useMediaQuery определяет, выполняется ли медиа-запрос с переданными параметрами.
 * @param {Object} settings  - параметры медиа-запроса для проверки.
 * @return {boolean} - true, если медиа-запрос выполняется, и false, если не выполняется.
 */
const isMedia = ( settings ) => {
	console.log( settings );

	return useMediaQuery( settings );
};

//	Размеры вьюпорта
const isMin = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return isMedia( { minWidth: breakpoint( device, segment ) } );
};

const isMax = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return isMedia( { maxWidth: breakpoint( device, segment ) - 1 } );
};

//	Устройства
const isMobile = () => {
	return isMax( 'tablet', 'sm' );
};

const isTablet = () => {
	return isMin( 'tablet', 'sm' ) && isMax( 'desktop', 'sm' );
};

const isDesktop = () => {
	return isMin( 'desktop', 'sm' );
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

//	Тип устройства
const isType = ( type = 'all' ) => {
	return isMedia( { type } );
};

const Media = {
	config: Config,
	breakpoint,
	isMedia,

	isMin,
	isMax,

	isMobile,
	isTablet,
	isDesktop,

	isOrientation,
	isLandscape,
	isPortrait,

	isType,
};

export default Media;
