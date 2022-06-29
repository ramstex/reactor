import React, { useState } from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiButton from '../../../../components/Ui/Button/Button.jsx';
import LocalLayout from '../../components/Layout/Layout.jsx';

import './Buttons.scss';

// class PageUiKitButtons extends React.Component {
// 	//	Классы
// 	classNameRoot() {
// 		const { className } = this.props;
//
// 		return classnames( 'page page-ui-kit-buttons', className );
// 	}
//
// 	classNameCol() {
// 		return classnames( '_mb_4' );
// 	}
//
// 	onClick( event ) {
// 		event.preventDefault();
// 		console.log( 'CLICK', event );
// 	}
//
// 	render() {
// 		const themes = [ 'primary', 'secondary', 'success', 'warning', 'danger', 'info' ];
//
// 		const sizes = [ 'lg', 'md', 'sm' ];
//
// 		return (
// 			<div className={ this.classNameRoot() }>
// 				<MarkupSection title={ 'Ui Kit - Buttons' }>
// 					<LocalNav />
// 				</MarkupSection>
//
// 				{themes.map( ( theme ) => {
// 					return (
// 						<MarkupSection key={ theme } title={ theme } titleTag={ 'h4' }>
// 							<div>
// 								{sizes.map( ( size ) => {
// 									return (
// 										<div key={ size }>
// 											<Row>
// 												<Col className={ this.classNameCol() }>
// 													<UiButton
// 														theme={ theme }
// 														size={ size }
// 														href={ 'https://google.com' }
// 														target={ '_blank' }
// 													>
// 														Обычная кнопка
// 													</UiButton>
// 												</Col>
//
// 												<Col className={ this.classNameCol() } col={ 6 }>
// 													<UiButton theme={ theme } size={ size } wide onClick={ this.onClick }>
// 														Обычная широкая кнопка с событием
// 													</UiButton>
// 												</Col>
// 											</Row>
//
// 											<Row>
// 												<Col className={ this.classNameCol() } col={ 6 }>
// 													<UiButton theme={ theme } size={ size } wide ghost disabled>
// 														Обычная широкая кнопка
// 													</UiButton>
// 												</Col>
//
// 												<Col className={ this.classNameCol() }>
// 													<UiButton theme={ theme } size={ size } ghost active>
// 														Обычная кнопка
// 													</UiButton>
// 												</Col>
// 											</Row>
// 										</div>
// 									);
// 								} )}
// 							</div>
// 						</MarkupSection>
// 					);
// 				} )}
// 			</div>
// 		);
// 	}
// }
//
// PageUiKitButtons.propTypes = { className: PropTypes.string };

const PageUiKitButtons = () => {
	const onClick = ( event ) => {
		console.log( event );
	};

	return (
		<LocalLayout title={ 'Buttons' }>

			<MarkupSection>
				<Row>
					<Col className={ '_mb_3' }
						col={ 4 }>
						<UiButton> Default button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						col={ 4 }>
						<UiButton template={ 'ghost' }> Ghost button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						col={ 4 }>
						<UiButton template={ 'text' }> Text button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						col={ 4 }>
						<UiButton href={ 'https://google.com' }
							target={ '_blank' }
							onClick={ onClick }> Default Link </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						col={ 4 }>
						<UiButton href={ 'https://google.com' }
							target={ '_blank' }
							template={ 'ghost' }
							onClick={ onClick }> Ghost Link </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						col={ 4 }>
						<UiButton href={ 'https://google.com' }
							target={ '_blank' }
							template={ 'text' }
							onClick={ onClick }> Text Link </UiButton>
					</Col>
				</Row>
			</MarkupSection>
		</LocalLayout>
	);
}

export default PageUiKitButtons;
