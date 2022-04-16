import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiInput from '../../../../components/Ui/Input/Input.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Inputs.scss';

class PageUiKitInputs extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			val1: '',
			val2: '',
			val3: '',
			val4: 'disabled',
			val5: 'success',
			val6: 'error',
		};

		this.onChange = this.onChange.bind( this );
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'page-ui-kit-inputs', className );
	}

	onChange( key ) {
		return ( event ) => {
			this.setState( {
				[key]: event.target.value,
			} );
		};
	}

	render() {
		const inputs = [
			{
				id: 1,
				label: 'Лейбл',

				props: {
					value: this.state.val1,
					onChange: this.onChange( 'val1' ),
				},
			},

			{
				id: 2,
				label: 'Лейбл 2',

				props: {
					value: this.state.val2,
					textarea: true,
					onChange: this.onChange( 'val2' ),
				},
			},

			{
				id: 3,
				label: 'Лейбл 3',

				props: {
					value: this.state.val3,
					placeholder: 'placeholder',
					required: true,
					onChange: this.onChange( 'val3' ),
				},
			},

			{
				id: 4,
				label: 'Лейбл 4',

				props: {
					value: this.state.val4,
					disabled: true,
					onChange: this.onChange( 'val4' ),
				},
			},

			{
				id: 5,
				label: 'Лейбл 5',

				props: {
					value: this.state.val5,
					success: true,
					message: 'Success message',
					onChange: this.onChange( 'val5' ),
				},
			},

			{
				id: 5,
				label: 'Лейбл 6',

				props: {
					value: this.state.val6,
					error: true,
					message: 'Error message',
					onChange: this.onChange( 'val6' ),
				},
			},
		];

		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Inputs' }>
					<LocalNav />

					<div>
						{ inputs.map( ( item ) => (
							<Row className={ '_mb_4' } key={ item.id }>
								<Col col={ 4 }>
									<UiInput { ...item.props } > { item.label } </UiInput>
								</Col>
							</Row>
						) ) }
					</div>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitInputs.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitInputs;
