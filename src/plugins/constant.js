const Statuses = [
	'default',
	'success',
	'warning',
	'error',
];

const ClassModifier = (name) => {
	return `_${ name }`;
}

export {
	ClassModifier,
	Statuses,
};
