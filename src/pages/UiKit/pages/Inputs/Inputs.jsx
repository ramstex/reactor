import React, { useState } from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiInput from '../../../../components/Ui/Input/Input.jsx';
import LocalLayout from '../../components/Layout/Layout.jsx';

import './Inputs.scss';

const PageUiKitInputs = () => {
	const [
		value,
		setValue,
	] = useState( 'value' );

	const onChange = ( event ) => {
		setValue( event.target.value );
	};

	return (
		<LocalLayout title={ 'Inputs' }>
			<MarkupSection title={ 'Ui Kit - Inputs' }>
				<Row className="_mb_3">
					<Col col={ 6 }>
						<UiInput
							value={ value }
							placeholder={ 'Введите что-нибудь' }
							onChange={ onChange }
						>Обычный инпут</UiInput>
					</Col>
				</Row>

				<Row className="_mb_3">
					<Col col={ 6 }>
						<UiInput
							value={ value }
							textarea
							resize
							placeholder={ 'Введите что-нибудь' }
							onChange={ onChange }
						>Текстовое поле</UiInput>
					</Col>
				</Row>
			</MarkupSection>
		</LocalLayout>
	);
};

export default PageUiKitInputs;
