import React from 'react';

import UiKit from '/src/pages/UiKit/UiKit';
import UiKitGrid from '/src/pages/UiKit/pages/Grid/Grid';
import UiKitMedia from '/src/pages/UiKit/pages/Media/Media';
import UiKitTypography from '/src/pages/UiKit/pages/Typography/Typography';
import UiKitColors from '/src/pages/UiKit/pages/Colors/Colors';
import UiKitIcons from '/src/pages/UiKit/pages/Icons/Icons';
import UiKitButtons from '/src/pages/UiKit/pages/Buttons/Buttons';
import UiKitInputs from '/src/pages/UiKit/pages/Inputs/Inputs';
import UiKitForms from '/src/pages/UiKit/pages/Forms/Forms';

import _ROUTES from '../../../config/routes.js';

const _UI_KIT_CONFIG = {
	enabled: true,

	pages: [
		{
			name: 'home',
			href: _ROUTES.uiKit.root,
			component: <UiKit />,
		},

		{
			name: 'grid',
			href: _ROUTES.uiKit.grid,
			component: <UiKitGrid />,
		},

		{
			name: 'media',
			href: _ROUTES.uiKit.media,
			component: <UiKitMedia />,
		},

		{
			name: 'typography',
			href: _ROUTES.uiKit.typography,
			component: <UiKitTypography />,
		},

		{
			name: 'colors',
			href: _ROUTES.uiKit.colors,
			component: <UiKitColors />,
		},

		{
			name: 'icons',
			href: _ROUTES.uiKit.icons,
			component: <UiKitIcons />,
		},

		{
			name: 'buttons',
			href: _ROUTES.uiKit.buttons,
			component: <UiKitButtons />,
		},

		{
			name: 'inputs',
			href: _ROUTES.uiKit.inputs,
			component: <UiKitInputs />,
		},

		{
			name: 'forms',
			href: _ROUTES.uiKit.forms,
			component: <UiKitForms />,
		},
	],
};

export default _UI_KIT_CONFIG;
