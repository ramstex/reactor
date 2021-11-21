import React from 'react';

const Post = ( props ) => {
	return (
		<div className="post">
			<div className="post__content">
				<h1>{ props.title }</h1>
				<div className="post__text">Post text</div>
			</div>
			<button type="button">Delete</button>
		</div>
	)
}

export default Post;
