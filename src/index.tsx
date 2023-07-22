import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './plugins/router';

import { Provider } from 'react-redux';
import store from './store/index';

import App from './components/App/App';

import './style/style.scss';

const appRootElement: HTMLElement | null = document.getElementById( 'app-root' );

if ( !appRootElement ) throw new Error( 'Failed to find the root element' );

createRoot( appRootElement )
	.render(
		<StrictMode>
			<Router>
				<Provider store={ store }>
					<App />
				</Provider>
			</Router>
		</StrictMode>
	);
