import React from 'react';

import MarkupSection from '../../../../components/Markup/Section/Section.jsx';
import { GridRow, GridCol } from '../../../../components/Grid/Grid.jsx';
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
				<GridRow>
					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton> Default button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton template={ 'ghost' }> Ghost button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton template={ 'text' }> Text button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							href={ 'https://google.com' }
							target={ '_blank' }
							onClick={ onClick }
						> Default Link </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							href={ 'https://google.com' }
							target={ '_blank' }
							template={ 'ghost' }
							onClick={ onClick }
						> Ghost Link </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							href={ 'https://google.com' }
							target={ '_blank' }
							template={ 'text' }
							onClick={ onClick }
						> Text Link </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							onClick={ onClick }
						> Button with icon </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							template={ 'ghost' }
							onClick={ onClick }
						> Ghost button with icon </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							template={ 'text' }
							onClick={ onClick }
						> Text button with icon </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							square
							onClick={ onClick }
						>Square button</UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							template={ 'ghost' }
							captionPosition={ 'bottom' }
							square
							onClick={ onClick }
						>Square button</UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							icon={ 'search' }
							template={ 'text' }
							square
							onClick={ onClick }
						>Square button</UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton disabled> Disabled button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							template={ 'ghost' }
							disabled
						> Disabled ghost button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							template={ 'text' }
							disabled
						> Disabled text button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton hover> Hover button </UiButton>
					</GridCol>

					<GridCol
						className={ '_mb_3' }
						col={ 4 }>
						<UiButton
							template={ 'ghost' }
							hover
						> Hover ghost button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 4 }>
						<UiButton
							template={ 'text' }
							hover
						> Hover text button </UiButton>
					</GridCol>

					<GridCol className={ '_mb_3' }
						 col={ 12 }>
						<UiButton wide> Wide button </UiButton>
					</GridCol>

					<GridCol
						className={ '_mb_3' }
						col={ 12 }
					>
						<UiButton
							icon={ 'search' }
							wide
							square
						> Wide button with icon </UiButton>
					</GridCol>
				</GridRow>
			</MarkupSection>
		</LocalLayout>
	);
};

export default PageUiKitButtons;
