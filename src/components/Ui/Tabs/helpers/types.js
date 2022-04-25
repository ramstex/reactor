import PropTypes from 'prop-types';

export const TabType = {
	id: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ).isRequired,

	title: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
		PropTypes.node,
	] ),

	content: PropTypes.node,
	href: PropTypes.string,
	target: PropTypes.oneOf( [
		'_self',
		'_blank',
	] ),
	disabled: PropTypes.bool,

	onClick: PropTypes.func,
	onEnter: PropTypes.func,
	onLeave: PropTypes.func,
};
