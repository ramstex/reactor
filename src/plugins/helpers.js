export const isAbsoluteUrl = (url = '') => {
	const list = [
		'http://',
		'https://',
		'ftp://',
		'ssh://',
	];

	return !!list.find((item) => {
		return url.indexOf(item) === 0;
	});
};
