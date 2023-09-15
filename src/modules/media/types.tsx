import { EMediaOrientations, EMediaDevices, EMediaBreakpoints } from './helper';

export type TMediaOrientations = `${ EMediaOrientations }`;
export type TMediaDevices = `${ EMediaDevices }`;
export type TMediaBreakpoints = `${ EMediaBreakpoints }`;

interface IMediaCheck {
	minWidth?: number;
	maxWidth?: number;
	orientation?: TMediaOrientations;
}
export type TMediaCheck = IMediaCheck;

export type TMediaChecker = ( settings: TMediaCheck ) => boolean;

interface IMediaBreakpointSettings {
	device: TMediaDevices;
	segment: TMediaBreakpoints;
}
export type TMediaBreakpointSettings = IMediaBreakpointSettings;

interface IMediaDeviceBreakpoints {
	[ EMediaBreakpoints.sm ]: number,
	[ EMediaBreakpoints.md ]: number,
	[ EMediaBreakpoints.lg ]: number,
}
export type TMediaDeviceBreakpoints = IMediaDeviceBreakpoints;

interface IMediaConfig {
	breakpoints: {
		[ EMediaDevices.mobile ]: TMediaDeviceBreakpoints,
		[ EMediaDevices.tablet ]: TMediaDeviceBreakpoints,
		[ EMediaDevices.desktop ]: TMediaDeviceBreakpoints,
	},

	defaults: TMediaBreakpointSettings,
}
export type TMediaConfig = IMediaConfig;

interface IMedia {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isLandscape: boolean;
	isPortrait: boolean;
}
type TMedia = IMedia;

export type TUseMedia = () => TMedia;
