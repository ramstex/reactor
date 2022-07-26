import React, { useState } from 'react';

import MarkupSection from '/src/components/Markup/Section/Section.jsx';
import { GridRow, GridCol } from '/src/components/Grid/Grid.jsx';
import UiButton from '/src/components/Ui/Button/Button.jsx';
import UiInput from '/src/components/Ui/Input/Input.jsx';
import LocalLayout from '../../components/Layout/Layout.jsx';

import './Inputs.scss';

const PageUiKitInputs = () => {
	const [
		value,
		setValue,
	] = useState( 'value' );

	const [
		text,
		setText,
	] = useState( 'text' );

	const [
		password,
		setPassword,
	] = useState( '' );

	const onChangeValue = ( event ) => {
		setValue( event.target.value );
	};

	const onChangeText = ( event ) => {
		setText( event.target.value );
	};

	const onChangePassword = ( event ) => {
		setPassword( event.target.value );
	};

	const onClickValue = () => {
		setValue( 'value' );
	};

	const onClickClear = () => {
		setValue( '' );
	};

	return (
		<LocalLayout title={ 'Inputs' }>
			<MarkupSection>
				<GridRow className="_mb_3">
					<GridCol col={ 6 }>
						<UiInput
							value={ value }
							placeholder={ 'Введите что-нибудь' }
							clearable
							aside={
								<React.Fragment>
									<UiButton
										icon={ 'refresh' }
										onClick={ onClickValue }
									/>
									<UiButton
										icon={ 'close' }
										onClick={ onClickClear }
									/>
								</React.Fragment>
							}
							onChange={ onChangeValue }
						>Обычный инпут</UiInput>
					</GridCol>
				</GridRow>

				<GridRow className="_mb_3">
					<GridCol col={ 6 }>
						<UiInput
							value={ text }
							textarea
							resize
							placeholder={ 'Введите что-нибудь' }
							onChange={ onChangeText }
						>Текстовое поле</UiInput>
					</GridCol>
				</GridRow>

				<GridRow className="_mb_3">
					<GridCol col={ 6 }>
						<UiInput
							value={ password }
							type={ 'password' }
							switchable
							onChange={ onChangePassword }
						>Пароль</UiInput>
					</GridCol>
				</GridRow>
			</MarkupSection>
		</LocalLayout>
	);
};

export default PageUiKitInputs;
