import { useState } from 'react';

import Link from "next/link";

const Index = () => {
	const [ articles ] = useState( [
		{
			id: 1,
			title: 'Статья',
		},
		{
			id: 2,
			title: 'Ещё статья',
		},
	] );
	return (
		<div>
			<h1>Статьи</h1>
			<ul>
				{ articles.map( article =>
					<li key={ article.id }>
						<Link href={ `/articles/${ article.id }` }>{ article.title }</Link>
					</li>,
				) }
			</ul>
		</div>
	)
};

export default Index;
