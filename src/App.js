import React from 'react';

import MarkupSection from "./components/markup/Section/Section";
import Post from "./components/Post/Post";

import './styles/App.scss';

function App() {
	return (
		<div className="App">
			<MarkupSection title={ "POSTS" }>
				<Post title={ "Post title" } />
				<Post title={ "Another title" } />
				<Post title={ "Bebebe" } />
			</MarkupSection>
		</div>
	);
}

export default App;
