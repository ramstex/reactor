const isProduction = process.env.MODE === 'production';
const isDevelopment = process.env.MODE === 'development';

const useEnv = () => {
	return {
		isProduction,
		isDevelopment,
	};
};

export default useEnv;
