import React, { useState } from 'react';
import omit from 'lodash/omit.js';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import {
	Row, Col
} from '../../../../components/Grid/Grid.jsx';
import UiInput from '../../../../components/Ui/Input/Input.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Inputs.scss';

import { createDummyState } from './dummy.jsx';

const PageUiKitInputs = () => {
	const [ inputs, setInputs ] = useState( createDummyState().inputs );

	return (
		<div className={ 'page page-ui-kit-inputs' }>
			<MarkupSection title={ 'Ui Kit - Inputs' }>
				<LocalNav />

				<div>
					{ inputs.map( ( item, index ) => {
						return (
							<Row className={ '_mb_4' } key={ index }>
								<Col col={ 4 }>
									<UiInput { ...item.props } onChange={ ( event ) => {
										item.props.value = event.target.value;
										setInputs( [ ...inputs ] );
									} }> { item.label } </UiInput>
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
