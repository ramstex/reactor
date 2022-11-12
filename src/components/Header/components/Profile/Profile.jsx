import React from 'react';
import classnames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { unsetUser } from '../../../../store/user.js';
import useApi from '../../../../plugins/api.jsx';

import BaseIcon from '../../../Base/Icon/Icon.jsx';
import BaseLink from '../../../Base/Link/Link.jsx';
import { GridRow, GridCol } from '../../../Grid/Grid.jsx';

import _ROUTES from '../../../../../config/routes.js';

const LocalProfile = ( props ) => {
	const dispatch = useDispatch();

	const user = useSelector( ( state ) => {
		return state.user.user;
	} );

	const isUser = useSelector( ( state ) => {
		return state.user.isUser;
	} );

	const { query } = useApi();

	const logout = async () => {
		await query( 'get', '/', { logout: undefined } );

		unsetUser();
	};

	const onClickLogout = async ( event ) => {
		event.preventDefault();
	};

	return (
		<div className={ 'header-profile' }>
			{ isUser
				? (
					<GridRow>
						<GridCol>
							<BaseLink href={ _ROUTES.profile }>
								<BaseIcon icon={ 'profile-login' } />
							</BaseLink>
						</GridCol>

						<GridCol>
							<BaseLink href={ _ROUTES.profile }>{ user?.fio }</BaseLink>
							<span> / </span>
							<BaseLink href={ _ROUTES.logout }
									  onClick={ onClickLogout }>Выход</BaseLink>
						</GridCol>
					</GridRow>
				)
				: (
					<GridRow>
						<GridCol>
							<BaseLink href={ _ROUTES.login }
									  onClick={ onClickLogout }>
								<BaseIcon icon={ 'profile-logout' } />
							</BaseLink>
						</GridCol>

						<GridCol>
							<BaseLink href={ _ROUTES.login }>Вход</BaseLink>
							<span> / </span>
							<BaseLink href={ _ROUTES.registration }>Регистрация</BaseLink>
						</GridCol>
					</GridRow>
				)
			}
		</div>
	);
};

export default LocalProfile;
