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
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	onEnter: PropTypes.func,
	onLeave: PropTypes.func,
	onEnable: PropTypes.func,
	onDisable: PropTypes.func,
};
