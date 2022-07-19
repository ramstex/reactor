import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './components/App/App.jsx';

import './style.scss';

ReactDOMClient.createRoot( document.getElementById( 'app-root' ) )
	.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
