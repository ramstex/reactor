import React from 'react';

import PageUiKit from '/src/pages/UiKit/UiKit.jsx';
import PageUiKitGrid from '/src/pages/UiKit/pages/Grid/Grid.jsx';
import PageUiKitMedia from '/src/pages/UiKit/pages/Media/Media.jsx';
import PageUiKitTypography from '/src/pages/UiKit/pages/Typography/Typography.jsx';
import PageUiKitColors from '/src/pages/UiKit/pages/Colors/Colors.jsx';
import PageUiKitIcons from '/src/pages/UiKit/pages/Icons/Icons.jsx';
import PageUiKitButtons from '/src/pages/UiKit/pages/Buttons/Buttons.jsx';
import PageUiKitDropdown from '/src/pages/UiKit/pages/Dropdown/Dropdown.jsx';
import PageUiKitInputs from '/src/pages/UiKit/pages/Inputs/Inputs.jsx';
import PageUiKitTabs from '/src/pages/UiKit/pages/Tabs/Tabs.jsx';
import PageUiKitForms from '/src/pages/UiKit/pages/Forms/Forms.jsx';
import PageUiKitCheckboxes from '/src/pages/UiKit/pages/Checkboxes/Checkboxes.jsx';
import PageUiKitSelect from '/src/pages/UiKit/pages/Select/Select.jsx';

const RootPath = '/ui-kit';

const UiKitConfig = {
	enabled: true,

	pages: [
		{
			name: 'home',
			href: `${ RootPath }`,
			component: <PageUiKit />,
		},

		{
			name: 'grid',
			href: `${ RootPath }/grid`,
			component: <PageUiKitGrid />,
		},

		{
			name: 'media',
			href: `${ RootPath }/media`,
			component: <PageUiKitMedia />,
		},

		{
			name: 'typography',
			href: `${ RootPath }/typography`,
			component: <PageUiKitTypography />,
		},

		{
			name: 'colors',
			href: `${ RootPath }/colors`,
			component: <PageUiKitColors />,
		},

		{
			name: 'icons',
			href: `${ RootPath }/icons`,
			component: <PageUiKitIcons />,
		},

		{
			name: 'buttons',
			href: `${ RootPath }/buttons`,
			component: <PageUiKitButtons />,
		},

		{
			name: 'inputs',
			href: `${ RootPath }/inputs`,
			component: <PageUiKitInputs />,
		},
	],
};

export default UiKitConfig;
