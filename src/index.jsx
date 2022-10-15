import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store/index.js';

import App from './components/App/App.jsx';

import './style.scss';

console.log( 'PROCESS', process );

ReactDOMClient.createRoot( document.getElementById( 'app-root' ) )
	.render(
		<React.StrictMode>
			<Provider store={ store }>
				<App />
			</Provider>
		</React.StrictMode>
	);
