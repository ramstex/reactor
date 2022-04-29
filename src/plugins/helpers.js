export function isAbsoluteUrl(url = '') {
	const list = ['http://', 'https://', 'ftp://', 'ssh://'];

	return !!list.find((item) => {
		return url.indexOf(item) === 0;
	});
}

export function getChildrenByKey(children = [], key = null) {
	if ('length' in children) {
		return children.reduce((prev, curr) => {
			if (curr.key === key) {
				prev.push(curr);
			}

			return prev;
		}, []);
	}

	return children.key === key ? children : undefined;
}

export function isFunction(func) {
	return typeof func === 'function';
}
