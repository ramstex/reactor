import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../plugins/history.js';
import useApi from '../../plugins/api.jsx';

import MarkupSection from '/src/components/Markup/Section/Section.jsx';
import _ROUTES from '../../../config/routes.js';
import { setUser } from '../../store/user.js';

const PageProfile = ( props ) => {
	const { className } = props;

	const classNameRoot = classnames( 'page page-profile', className );

	const { query } = useApi();

	const dispatch = useDispatch();

	const user = useSelector( ( state ) => {
		return state.user.user;
	} );

	const isUser = useSelector( ( state ) => {
		return state.user.isUser;
	} );

	console.log( 'IS USER', isUser );
	if ( !isUser ) {
		query( 'get', '/', {
			do: 'user',
			json: undefined,
		} )
			.then( ( response ) => {
				if ( response.data.User ) {
					dispatch( setUser( response.data.User ) );
				} else {
					history.push( _ROUTES.login );
				}
			} )
	}

	return (
		<div className={ classNameRoot }>
			<MarkupSection title={ 'Profile' }>
				{ isUser && (
					<>
						<p>Login: { user?.login }</p>
						<p>Fio: { user?.fio }</p>
						<p>Email: { user?.email }</p>
					</>
				) }
			</MarkupSection>
		</div>
	);
};

export default PageProfile;
