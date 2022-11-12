const delay = 1000;

const apiLogin = async ( data ) => {
	return new Promise( ( onResolve, onReject ) => {
		setTimeout( () => {
			if ( data instanceof FormData ) {
				// eslint-disable-next-line no-param-reassign
				data = {
					login: data.get( 'login' ),
					password: data.get( 'password' ),
				}
			}

			if ( data.login !== 'qwe@qwe.qwe' || data.password !== 'qwe' ) {
				onResolve(
					{
						data: {
							success: false,
							error: 'Ошибка! Email или пароль не верные!',
						},
					} );

				return;
			}

			onResolve( { data: { success: true } } );
		}, delay );
	} );
}

const apiUser = async () => {
	return new Promise( ( onResolve ) => {
		setTimeout( () => {
			onResolve( {
				data: {
					email: 'qwe@qwe.qwe',
					fio: 'qwe',
					login: 'qwe',
				},
			} );
		}, delay );
	} );
}

const dummyApi = async ( method, url, params, data, options ) => {
	if ( url.indexOf( 'login' ) >= 0 ) {
		return apiLogin( data );
	}

	if ( url.indexOf( 'user' ) >= 0 ) {
		return apiUser( data );
	}
}

export default dummyApi;
