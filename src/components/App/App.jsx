import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout.jsx';
import PageHome from '../../pages/Home/Home.jsx';
import PageProfile from '../../pages/Profile/Profile.jsx';

import PageUiKit from '../../pages/UiKit/UiKit.jsx';
import PageUiKitGrid from '../../pages/UiKit/pages/Grid/Grid.jsx';
import PageUiKitMedia from '../../pages/UiKit/pages/Media/Media.jsx';
import PageUiKitTypography from '../../pages/UiKit/pages/Typography/Typography.jsx';
import PageUiKitColors from '../../pages/UiKit/pages/Colors/Colors.jsx';
import PageUiKitButtons from '../../pages/UiKit/pages/Buttons/Buttons.jsx';
import PageUiKitDropdown from '../../pages/UiKit/pages/Dropdown/Dropdown.jsx';
import PageUiKitInputs from '../../pages/UiKit/pages/Inputs/Inputs.jsx';
import PageUiKitTabs from '../../pages/UiKit/pages/Tabs/Tabs.jsx';
import PageUiKitForms from '../../pages/UiKit/pages/Forms/Forms.jsx';
import PageUiKitCheckboxes from '../../pages/UiKit/pages/Checkboxes/Checkboxes.jsx';
import PageUiKitSelect from '../../pages/UiKit/pages/Select/Select.jsx';

class App extends React.Component {
	//	Классы
	classNameRoot() {
		const { className } = this.props;

		return classnames( 'app', className );
	}

	classNameLayout() {
		return classnames( 'app__layout' );
	}

	render() {
		return (
			<div className={ this.classNameRoot() }>
				<BrowserRouter>
					<Layout className={ this.classNameLayout() }>
						<Routes>
							<Route path={ '/' }
								element={ <PageHome /> } />
							<Route path={ '/profile' }
								element={ <PageProfile /> } />

							<Route path={ '/ui-kit' }
								element={ <PageUiKit /> } />
							<Route path={ '/ui-kit/typography' }
								element={ <PageUiKitTypography /> } />
							<Route path={ '/ui-kit/grid' }
								element={ <PageUiKitGrid /> } />
							<Route path={ '/ui-kit/media' }
								element={ <PageUiKitMedia /> } />
							<Route path={ '/ui-kit/colors' }
								element={ <PageUiKitColors /> } />
							<Route path={ '/ui-kit/buttons' }
								element={ <PageUiKitButtons /> } />
							<Route path={ '/ui-kit/dropdown' }
								element={ <PageUiKitDropdown /> } />
							<Route path={ '/ui-kit/inputs' }
								element={ <PageUiKitInputs /> } />
							<Route path={ '/ui-kit/tabs' }
								element={ <PageUiKitTabs /> } />
							<Route path={ '/ui-kit/forms' }
								element={ <PageUiKitForms /> } />
							<Route path={ '/ui-kit/checkboxes' }
								element={ <PageUiKitCheckboxes /> } />
							<Route path={ '/ui-kit/select' }
								element={ <PageUiKitSelect /> } />
						</Routes>
					</Layout>
				</BrowserRouter>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default App;
