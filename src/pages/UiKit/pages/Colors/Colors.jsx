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
							<LocalColor code={ '#c0baff' } title={ 'Primary' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#491818' } title={ 'Secondary' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#30CF60' } title={ 'Success' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#F7D264' } title={ 'Warning' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#F77F6E' } title={ 'Danger' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#ABDDED' } title={ 'Info' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#D9D9D9' } title={ 'Muted' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#999999' } title={ 'Muted dark' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#EDEDED' } title={ 'Muted light' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#161616' } title={ 'Text' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#f5f5f5' } title={ 'Back' } border={ '#161616' } />
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
