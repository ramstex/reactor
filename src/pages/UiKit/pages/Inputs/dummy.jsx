// import React, { useState } from 'react';

// const onChange = ( input, event, props ) => {
// 	// const { inputs } = state;
// 	input = {
// 		...input,
// 		props: {
// 			...input.props,
// 			...props,
// 			value: event.target.value,
// 		},
// 	};
// };

export function createDummyState() {
	return {
		inputs: [
			{
				label: 'Обычный инпут',

				props: {
					value: '',
					type: 'email',
					onValid( event ) {
						console.log( 'VALID', event );
					},
					onInvalid( event ) {
						console.log( 'INVALID', event );
					},
				},
			},
			//
			// {
			// 	label: 'Текстовое поле',
			//
			// 	props: {
			// 		value: 1234567890,
			// 		textarea: true,
			// 		onChange( event ) {
			// 			onChange( event, 1 );
			// 		},
			// 	},
			// },
			//
			// {
			// 	label: 'Инпут с плейсхолдером',
			//
			// 	props: {
			// 		value: '',
			// 		placeholder: 'placeholder',
			// 		required: true,
			// 		onChange( event ) {
			// 			onChange( event, 2 );
			// 		},
			// 	},
			// },
			//
			// {
			// 	label: 'Поле read only',
			//
			// 	props: {
			// 		value: 'Read Only',
			// 		readOnly: true,
			// 		onChange( event ) {
			// 			onChange( event, 3 );
			// 		},
			// 	},
			// },
			//
			// {
			// 	label: 'Неактивное поле',
			//
			// 	props: {
			// 		value: 'Disabled',
			// 		disabled: true,
			// 		onChange( event ) {
			// 			onChange( event, 4 );
			// 		},
			// 	},
			// },
			//
			// {
			// 	label: 'Успешное поле',
			//
			// 	props: {
			// 		value: 'Success',
			// 		success: true,
			// 		message: 'Success message',
			// 		onChange( event ) {
			// 			onChange( event, 5, {
			// 				error: false,
			// 				success: false,
			// 				message: '',
			// 			} );
			// 		},
			// 	},
			// },
			//
			// {
			// 	label: 'Ошибочное поле',
			//
			// 	props: {
			// 		value: 'Error',
			// 		error: true,
			// 		success: true,
			// 		message: 'Error message',
			// 		onChange( event ) {
			// 			onChange( event, 6, {
			// 				error: false,
			// 				success: false,
			// 				message: '',
			// 			} );
			// 		},
			// 	},
			// },
		],
	};
}
