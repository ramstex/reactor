import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiInput from '../../../../components/Ui/Input/Input.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Inputs.scss';

import { createDummyState } from './dummy.jsx';

class PageUiKitInputs extends React.Component {
	constructor( props ) {
		super( props );
		this.state = createDummyState.call( this );
	}

	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'page page-ui-kit-inputs', className );
	}

	render() {
		const { inputs } = this.state;

		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Inputs' }>
					<LocalNav />

					<div>
						{ inputs.map( ( item, index ) => {
							return (
								<Row className={ '_mb_4' } key={ index }>
									<Col col={ 4 }>
										<UiInput { ...item.props } > { item.label } </UiInput>
									</Col>
								</Row>
							);
						} ) }
					</div>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitInputs.propTypes = { className: PropTypes.string };

export default PageUiKitInputs;
