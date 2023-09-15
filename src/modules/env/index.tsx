import { EEvnModes } from './helper';

import type { TUseEnv } from './types';

const isProduction: boolean = process.env.MODE === EEvnModes.prod;
const isDevelopment: boolean = process.env.MODE === EEvnModes.dev;

const useEnv: TUseEnv = () => {
	return {
		isProduction,
		isDevelopment,
	};
};

export default useEnv;
