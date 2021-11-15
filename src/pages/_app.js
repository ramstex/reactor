import Header from '../components/header/index';

import '../style/app.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp( { Component, pageProps } ) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return (
		<div className="app">
			<Header/> <Component { ...pageProps } />
		</div>
	)
}
