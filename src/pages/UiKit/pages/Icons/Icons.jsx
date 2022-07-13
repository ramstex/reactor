import React from 'react';

import BaseIcon from '/src/components/Base/Icon/Icon.jsx';
import MarkupSection from '/src/components/Markup/Section/Section.jsx';
import { GridRow, GridCol } from '/src/components/Grid/Grid.jsx';
import LocalNav from '../../components/Nav/Nav.jsx';

const PageUiKitIcons = () => {
	return (
		<div className={ 'page-ui-kit-icons' }>
			<MarkupSection title={ 'Ui Kit - Icons' }>
				<LocalNav />

				<GridRow className={ '_mb_3' }>
					<GridCol>
						<BaseIcon icon={ 'close' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'plus' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'minus' } />
					</GridCol>
				</GridRow>

				<GridRow className={ '_mb_3' }>
					<GridCol>
						<BaseIcon icon={ 'odnoklassniki' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'vkontakte' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'telegram' } />
					</GridCol>
				</GridRow>

				<GridRow className={ '_mb_3' }>
					<GridCol>
						<BaseIcon icon={ 'search' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'refresh' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'check' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'eye-closed' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'eye-opened' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'eye-opened' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'profile-login' } />
					</GridCol>

					<GridCol>
						<BaseIcon icon={ 'profile-logout' } />
					</GridCol>
				</GridRow>

				<GridRow className={ '_mb_3' }>
					<GridCol>
						<BaseIcon icon={ 'play' } />
					</GridCol>
				</GridRow>
			</MarkupSection>
		</div>
	);
};

export default PageUiKitIcons;
