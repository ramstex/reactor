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
							<LocalColor code={ '#7e7ab0' } title={ 'Primary dark' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#d6d1ff' } title={ 'Primary light' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#491818' } title={ 'Secondary' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#341313' } title={ 'Secondary dark' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#813434' } title={ 'Secondary light' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#30CF60' } title={ 'Success' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#239646' } title={ 'Success dark' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#69e18d' } title={ 'Success light' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#F7D264' } title={ 'Warning' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#b4994a' } title={ 'Warning dark' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#fce5a7' } title={ 'Warning light' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#F77F6E' } title={ 'Danger' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#9d5349' } title={ 'Danger dark' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#f5aea4' } title={ 'Danger light' } />
						</Col>
					</Row>

					<Row>
						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#ABDDED' } title={ 'Info' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#75a1af' } title={ 'Info dark' } />
						</Col>

						<Col className={ this.classNameCol() } col={ 2 }>
							<LocalColor code={ '#c4e4ef' } title={ 'Info light' } />
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
