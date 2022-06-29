export function createDummyState() {
	return {
		inputs: [
			{
				label: 'Обычный инпут',

				props: {
					value: '',
					type: 'email',
					onChange( event, input, index, inputs, setInputs ) {
						setInputs( [ ...inputs.map( ( mapInput, mapIndex ) => {
							if ( index === mapIndex ) {
								return {
									...mapInput,
									props: { ...mapInput.props },
								};
							}

							return { ...mapInput };
						} ) ] );
					},
				},
			},

			{
				label: 'Инпут с авто-сбросом валидации при вводе',

				props: {
					value: '',
					type: 'email',
					// onChange( event, input ) {
					// 	return {
					// 		...input,
					// 		props: {
					// 			...input.props,
					// 			error: false,
					// 			success: false,
					// 		},
					// 	};
					// },
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
