import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';
import LocalColor from '../../components/Color/Color.jsx';

import './Colors.scss';

class PageUiKitColors extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'page-ui-kit-colors', className );
	}

	classNameCol() {
		return classnames( '_mb_6' );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={'Ui Kit - Colors'}>
					<LocalNav />

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#c0baff' } title={ 'primary' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#491818' } title={ 'secondary' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#161616' } title={ 'text' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#f5f5f5' } title={ 'back' } border={ '#161616' } />
						</Col>
					</Row>
				</MarkupSection>
			</div>
		);
	}
}

PageUiKitColors.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitColors;
