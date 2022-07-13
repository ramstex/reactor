import React, { useState } from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { GridRow, GridCol } from '../../../../components/Grid/Grid.jsx';
import UiInput from '../../../../components/Ui/Input/Input.jsx';
import LocalLayout from '../../components/Layout/Layout.jsx';

import './Inputs.scss';

const PageUiKitInputs = () => {
	const [
		value,
		setValue,
	] = useState( 'value' );

	const [
		password,
		setPassword,
	] = useState( '' );

	const onChange = ( event ) => {
		setValue( event.target.value );
	};

	const onChangePassword = ( event ) => {
		setPassword( event.target.value );
	};

	return (
		<LocalLayout title={ 'Inputs' }>
			<MarkupSection title={ 'Ui Kit - Inputs' }>
				<GridRow className="_mb_3">
					<GridCol col={ 6 }>
						<UiInput
							value={ value }
							placeholder={ 'Введите что-нибудь' }
							onChange={ onChange }
						>Обычный инпут</UiInput>
					</GridCol>
				</GridRow>

				<GridRow className="_mb_3">
					<GridCol col={ 6 }>
						<UiInput
							value={ value }
							textarea
							resize
							placeholder={ 'Введите что-нибудь' }
							onChange={ onChange }
						>Текстовое поле</UiInput>
					</GridCol>
				</GridRow>

				<GridRow className="_mb_3">
					<GridCol col={ 6 }>
						<UiInput
							value={ password }
							type={ 'password' }
							passwordSwitch
							onChange={ onChangePassword }
						>Пароль</UiInput>
					</GridCol>
				</GridRow>
			</MarkupSection>
		</LocalLayout>
	);
};

export default PageUiKitInputs;
