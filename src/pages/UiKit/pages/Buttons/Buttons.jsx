import React from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { Row, Col } from '../../../../components/Grid/Grid.jsx';
import UiButton from '../../../../components/Ui/Button/Button.jsx';
import LocalLayout from '../../components/Layout/Layout.jsx';

import './Buttons.scss';

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
						<UiButton
							href={ 'https://google.com' }
							target={ '_blank' }
							onClick={ onClick }
						> Default Link </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							href={ 'https://google.com' }
							target={ '_blank' }
							template={ 'ghost' }
							onClick={ onClick }
						> Ghost Link </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							href={ 'https://google.com' }
							target={ '_blank' }
							template={ 'text' }
							onClick={ onClick }
						> Text Link </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							onClick={ onClick }
						> Button with icon </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							template={ 'ghost' }
							onClick={ onClick }
						> Ghost button with icon </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							template={ 'text' }
							onClick={ onClick }
						> Text button with icon </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton disabled> Disabled button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton template={ 'ghost' }
								  disabled
						> Disabled ghost button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							template={ 'text' }
							disabled
						> Disabled text button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton hover> Hover button </UiButton>
					</Col>

					<Col
						className={ '_mb_3' }
						col={ 4 }>
						<UiButton
							template={ 'ghost' }
							hover
						> Hover ghost button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							template={ 'text' }
							hover
						> Hover text button </UiButton>
					</Col>

					<Col className={ '_mb_3' }
						 col={ 12 }>
						<UiButton wide> Wide button </UiButton>
					</Col>

					<Col
						className={ '_mb_3' }
						col={ 12 }
					>
						<UiButton
							icon={ 'search' }
							wide
						> Wide button with icon </UiButton>
					</Col>
				</Row>
			</MarkupSection>
		</LocalLayout>
	);
};

export default PageUiKitButtons;
