import React, { useState, useRef } from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiInput from '../../../../components/Ui/Input/Input.jsx';
import UiButton from '../../../../components/Ui/Button/Button.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Inputs.scss';

import { createDummyState } from './dummy.jsx';

const PageUiKitInputs = () => {
	const [ inputs, setInputs ] = useState( createDummyState().inputs );

	const refs = useRef( [] );

	const updateInputs = ( input, propsToReplace ) => {
		input.props = {
			...input.props,
			...propsToReplace,
		};
		setInputs( [ ...inputs ] );
	};

	const validateInput = ( input, index ) => {
		return ( event ) => {
			const ref = refs.current[ index ];

			if ( ref.state.valid ) {
				updateInputs( input, { success: true } );
			} else {
				updateInputs( input, { error: true } );
			}
		};
	};

	return (
		<div className={ 'page page-ui-kit-inputs' }>
			<MarkupSection title={ 'Ui Kit - Inputs' }>
				<LocalNav />

				<div>
					{ inputs.map( ( input, index ) => {
						return (
							<Row className={ '_mb_4' } key={ index }>
								<Col col={ 4 }>
									<UiInput
										ref={ ( el ) => {
											return ( refs.current = [ ...refs.current, el ] );
										} }
										{ ...input.props }
										onChange={
											( event ) => {
												input.props.onChange( event, input, index, inputs, setInputs );
											}
										}
									> { input.label } </UiInput>
								</Col>

								<Col col={ 4 } alignV={ 'end' }>
									<UiButton
										onClick={ validateInput( input, index ) }>Валидировать</UiButton>
								</Col>
							</Row>
						);
					} ) }
				</div>
			</MarkupSection>
		</div>
	);
};

export default PageUiKitInputs;
