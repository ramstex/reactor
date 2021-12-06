import React  from 'react';

import MarkupSection from "./components/markup/Section/Section";
import Post from "./components/Post/Post";
import UiButton from "./components/ui/Button/Button";

import './styles/App.scss';

function App() {
	return (
		<div className="App">
			<MarkupSection title={ "POSTS" }>
				<Post title={ "Post title" } />
				<Post title={ "Another title" } />
				<Post
				title={ "Bebebe" } />
			</MarkupSection>
			<form action="">
				<input type="text" /> <input type="text" />
				<UiButton>Default</UiButton>
				<UiButton
					status="warning"
				>Warning</UiButton>
				<UiButton
					status="error"
					full
				>Error</UiButton>
				<UiButton
					ghost
				>Default Ghost</UiButton>
				<UiButton
					status="warning"
					ghost
					full
				>Warning Ghost</UiButton>
				<UiButton
					status="error"
					ghost
				>Error Ghost</UiButton>
			</form>
		</div>
	);
}

export default App;
