import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './components/App/App.jsx';

import './style.scss';

console.log( 'PROCESS', process );

ReactDOMClient.createRoot( document.getElementById( 'app-root' ) )
	.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
