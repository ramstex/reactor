import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './components/App/App.jsx';

import './style.scss';

ReactDOMClient.createRoot(
	// eslint-disable-next-line no-undef
	document.getElementById('app-root'),
).render(<App />);
