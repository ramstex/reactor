import React from 'react';

import Post from "./components/Post/Post";

import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Post title={ "Post title" } />
			<Post title={ "Another title" } />
			<Post title={ "Bebebe" } />
		</div>
	);
}

export default App;
