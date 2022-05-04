import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { login, logout } from '../../store/user.js';

import MarkupSection from '../../components/Markup/Section/Section.jsx';
import UiButton from '../../components/Ui/Button/Button.jsx';

class PageProfile extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames('page page-profile', className);
	}

	render() {
		const { user, login, logout } = this.props;

		return (
			<div className={this.classNameRoot()}>
				<MarkupSection title={'Profile Page'}>
					{!!user ? (
						<React.Fragment>
							<p>Login: {user.login}</p>
							<p>First name: {user.first_name}</p>
							<p>Last name: {user.last_name}</p>
							<p>E-mail: {user.email}</p>

							<UiButton className={'_mt_4'} onClick={logout}>
								Logout
							</UiButton>
						</React.Fragment>
					) : (
						<React.Fragment>
							<p>You are not authorized</p>

							<UiButton className={'_mt_4'} onClick={login}>
								Login
							</UiButton>
						</React.Fragment>
					)}
				</MarkupSection>
			</div>
		);
	}
}

PageProfile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PageProfile);
