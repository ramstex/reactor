import { useState } from 'react';
import { EInputType } from '../../../../components/Ui/Input/helpers';

import Section from '../../../../components/Markup/Section/Section';
import Input from '../../../../components/Ui/Input/Input';

import './style.scss';

const UiKitInputs = () => {
	const [ v1, setV1 ] = useState( 'value 1' );
	const [ v4, setV4 ] = useState( '' );

	return (
		<div>
			<Section>
				<Input
					placeholder={ 'Input' }
					value={ v1 }
					onChange={ ( event ) => {
						setV1( event.target.value );
					} }
				>Input caption</Input>

				<Input
					placeholder={ 'Input' }
					message={ 'Message' }
				>Input caption</Input>

				<Input
					placeholder={ 'Textarea' }
					textarea
				>Textarea caption</Input>

				<Input
					placeholder={ 'Input' }
					required
				>Required input</Input>

				<Input
					placeholder={ 'Password' }
					type={ EInputType.password }
					value={ v4 }
					clearable
					onChange={ ( event ) => {
						setV4( event.target.value );
					} }
					onClear={ () => {
						setV4( '' );
					} }
				>Password</Input>
			</Section>
		</div>
	);
};

export default UiKitInputs;
