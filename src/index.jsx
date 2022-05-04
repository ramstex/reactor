import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import store from './store/index.js';
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';

import './style.scss';

ReactDOMClient.createRoot(document.getElementById('app-root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
