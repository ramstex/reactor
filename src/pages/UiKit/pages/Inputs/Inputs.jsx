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
			val2: 'value 2',
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
		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Inputs' }>
					<LocalNav />

					<Row>
						<Col col={ 4 }>
							<UiInput value={ this.state.val1 } onChange={ this.onChange( 'val1' ) }></UiInput>
						</Col>

						<Col>
							<p>Значение: { this.state.val1 }</p>
						</Col>
					</Row>

					<Row>
						<Col col={ 4 }>
							<UiInput value={ this.state.val2 } textarea onChange={ this.onChange( 'val2' ) }></UiInput>
						</Col>

						<Col>
							<p>Значение: { this.state.val2 }</p>
						</Col>
					</Row>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitInputs.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitInputs;
