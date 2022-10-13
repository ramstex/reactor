const sendQuery = async ( method = 'GET', url, params, data, options = {} ) => {
	// ToDo: добавить params к урлу
	// return await fetch( url, {
	// 	...options,
	// 	method: method,
	// 	body: data,
	// } );

	return new Promise( ( onResolve, onReject ) => {
		setTimeout( () => {
			if ( data.email !== 'qwe@qwe.qwe' ) {
				onReject(
					{
						name: 'email',
						error: {
							type: 'notFound',
							message: 'Not found!',
						},
					} );

				return;
			}

			if ( data.password !== 'qwe' ) {
				onReject(
					{
						name: 'password',
						error: {
							type: 'wrong',
							message: 'Wrong password',
						},
					} );

				return;
			}

			onResolve();
		}, 2000 );
	} );
};

const useApi = () => {
	return { sendQuery };
};

export default useApi;
