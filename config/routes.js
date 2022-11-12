const rootRoute = '/index.php';
const uiKitRoute = `${ rootRoute }/ui-kit`;

const _ROUTES = {
	home: '/',
	registration: `${ rootRoute }/page/registration`,
	login: `${ rootRoute }/page/login`,
	logout: '/?logout',
	profile: `${ rootRoute }/page/profile`,

	uiKit: {
		root: uiKitRoute,
		grid: `${ uiKitRoute }/grid`,
		media: `${ uiKitRoute }/media`,
		typography: `${ uiKitRoute }/typography`,
		colors: `${ uiKitRoute }/colors`,
		icons: `${ uiKitRoute }/icons`,
		buttons: `${ uiKitRoute }/buttons`,
		inputs: `${ uiKitRoute }/inputs`,
		forms: `${ uiKitRoute }/forms`,
	},
};

export default _ROUTES;
