import React from 'react';

import PageUiKit from '/src/pages/UiKit/UiKit.jsx';
import PageUiKitGrid from '/src/pages/UiKit/pages/Grid/Grid.jsx';
import PageUiKitMedia from '/src/pages/UiKit/pages/Media/Media.jsx';
import PageUiKitTypography from '/src/pages/UiKit/pages/Typography/Typography.jsx';
import PageUiKitColors from '/src/pages/UiKit/pages/Colors/Colors.jsx';
import PageUiKitIcons from '/src/pages/UiKit/pages/Icons/Icons.jsx';
import PageUiKitButtons from '/src/pages/UiKit/pages/Buttons/Buttons.jsx';
import PageUiKitInputs from '/src/pages/UiKit/pages/Inputs/Inputs.jsx';
import PageUiKitForms from '/src/pages/UiKit/pages/Forms/Forms.jsx';
import PageUiKitDropdown from '/src/pages/UiKit/pages/Dropdown/Dropdown.jsx';
import PageUiKitTabs from '/src/pages/UiKit/pages/Tabs/Tabs.jsx';
import PageUiKitCheckboxes from '/src/pages/UiKit/pages/Checkboxes/Checkboxes.jsx';
import PageUiKitSelect from '/src/pages/UiKit/pages/Select/Select.jsx';

import _ROUTES from './routes.js';

const RootPath = '/ui-kit';

const UiKitConfig = {
	enabled: true,

	pages: [
		{
			name: 'home',
			href: _ROUTES.uiKit.root,
			component: <PageUiKit />,
		},

		{
			name: 'grid',
			href: _ROUTES.uiKit.grid,
			component: <PageUiKitGrid />,
		},

		{
			name: 'media',
			href: _ROUTES.uiKit.media,
			component: <PageUiKitMedia />,
		},

		{
			name: 'typography',
			href: _ROUTES.uiKit.typography,
			component: <PageUiKitTypography />,
		},

		{
			name: 'colors',
			href: _ROUTES.uiKit.colors,
			component: <PageUiKitColors />,
		},

		{
			name: 'icons',
			href: _ROUTES.uiKit.icons,
			component: <PageUiKitIcons />,
		},

		{
			name: 'buttons',
			href: _ROUTES.uiKit.buttons,
			component: <PageUiKitButtons />,
		},

		{
			name: 'inputs',
			href: _ROUTES.uiKit.inputs,
			component: <PageUiKitInputs />,
		},

		{
			name: 'forms',
			href: _ROUTES.uiKit.forms,
			component: <PageUiKitForms />,
		},
	],
};

export default UiKitConfig;
