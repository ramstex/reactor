import classBuilder from '../../plugins/classBuilder';
import { Outlet } from '../../plugins/router';

import Section from '../../components/Markup/Section/Section';
import LocalNav from './components/Nav/Nav.jsx';

import type { TUiKitComponent } from './types';

const PageUiKit: TUiKitComponent = ( props ) => {
	const { className } = props;

	const classNameRoot = classBuilder( 'page page-ui-kit', className );

	return (
		<div className={ classNameRoot }>
			<Section title={ 'Ui Kit' }>
				<LocalNav />
			</Section>

			<Outlet />
		</div>
	);
};

export default PageUiKit;
