import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Config from '/config/media.json';

const breakpoint = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return Config.breakpoints[ device ][ segment ];
};

const isMin = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return useMediaQuery( { minWidth: breakpoint( device, segment ) } );
};

const isMax = ( device = Config.defaults.device, segment = Config.defaults.segment ) => {
	return useMediaQuery( { maxWidth: breakpoint( device, segment ) - 1 } );
};

const isOrientation = ( orientation = 'landscape' ) => {
	return useMediaQuery( { orientation: orientation } );
};

const Media = {
	config: Config,
	breakpoint,
	isMin,
	isMax,
	isOrientation,
};

export default Media;
