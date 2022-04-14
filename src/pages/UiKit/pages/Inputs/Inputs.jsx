import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Inputs.scss';

class PageUiKitInputs extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'page-ui-kit-inputs', className );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Inputs' }>
					<LocalNav />

					<Row>
						<Col />
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
