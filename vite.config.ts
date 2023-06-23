import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		root: 'src',

		server: { port: Number(env.PORT) },

		css: { preprocessorOptions: { scss: {} } },

		plugins: [ react(), svgr() ],
	};
});
