const isProduction: boolean = process.env.MODE === 'production';
const isDevelopment: boolean = process.env.MODE === 'development';

type TUseEnv = () => {
	isProduction: boolean,
	isDevelopment: boolean,
}

const useEnv: TUseEnv = () => {
	return {
		isProduction,
		isDevelopment,
	};
};

export default useEnv;
