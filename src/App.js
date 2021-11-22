import React, { useState }  from 'react';

import MarkupSection from "./components/markup/Section/Section";
import Post from "./components/Post/Post";
import UiButton from "./components/ui/Button/Button";

import './styles/App.scss';

function App() {
	const [ buttonState, setButtonState] = useState('default');

	const onButtonClick = (event, a) => {
		event.preventDefault();
		setButtonState('error')
	};

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
				<UiButton
					status={ buttonState }
					onClick={ onButtonClick }
				>Создать пост</UiButton>
			</form>
		</div>
	);
}

export default App;
