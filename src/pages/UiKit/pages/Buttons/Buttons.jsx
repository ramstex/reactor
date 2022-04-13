import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiButton from '../../../../components/Ui/Button/Button.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

import './Buttons.scss';

class PageUiKitButtons extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;
		return classnames( 'page-ui-kit-buttons', className );
	}

	classNameCol() {
		return classnames( '_mb_4' );
	}

	render() {
		const themes = [
			'primary',
			'secondary',
			'success',
			'warning',
			'danger',
			'info',
		];

		return (
			<div className={ this.classNameRoot() }>
				<MarkupSection title={ 'Ui Kit - Buttons' }>
					<LocalNav />
				</MarkupSection>

				{ themes.map( ( theme ) => (
					<MarkupSection key={ theme } title={ theme } titleTag={ 'h4' }>
						<Row>
							<Col className={ this.classNameCol() }>
								<UiButton theme={ theme }>Обычная кнопка</UiButton>
							</Col>

							<Col className={ this.classNameCol() } col={ 6 }>
								<UiButton theme={ theme } wide>Обычная широкая кнопка</UiButton>
							</Col>
						</Row>

						<Row>
							<Col className={ this.classNameCol() } col={ 6 }>
								<UiButton theme={ theme } wide ghost>Обычная широкая кнопка</UiButton>
							</Col>

							<Col className={ this.classNameCol() }>
								<UiButton theme={ theme } ghost>Обычная кнопка</UiButton>
							</Col>
						</Row>
					</MarkupSection>
				) ) }
			</div>
		);
	}
}

PageUiKitButtons.propTypes = {
	className: PropTypes.string,
};

export default PageUiKitButtons;
