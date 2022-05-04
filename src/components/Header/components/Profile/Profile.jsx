import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { login, logout } from '../../../../store/user.js';

import BaseIcon from '../../../Base/Icon/Icon.jsx';

import './Profile.scss';

class LocalProfile extends React.Component {
	constructor(props) {
		super(props);

		this.toAuth = this.toAuth.bind(this);
		this.toProfile = this.toProfile.bind(this);
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('header-profile', className);
	}

	toAuth() {}

	toProfile() {}

	render() {
		const { user } = this.props;

		return (
			<div className={this.classNameRoot()}>
				{!!user ? (
					<React.Fragment>
						<BaseIcon
							className={'header-profile__icon'}
							icon={'profile-logged-in'}
							onClick={this.toProfile}
						/>
					</React.Fragment>
				) : (
					<React.Fragment>
						<BaseIcon
							className={'header-profile__icon'}
							icon={'profile-logged-out'}
							onClick={this.toAuth}
						/>
					</React.Fragment>
				)}
			</div>
		);
	}
}

LocalProfile.propTypes = {
	className: PropTypes.string,
};

const mapStateToProps = (state) => {
	return {
		user: state.user.data,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login() {
			return dispatch(login());
		},

		logout() {
			return dispatch(logout());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalProfile);
