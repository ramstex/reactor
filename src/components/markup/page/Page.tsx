import type { FC, ReactNode } from 'react';

interface IPageProps {
	children?: ReactNode,
	className?: string,
}

const Page: FC<IPageProps> = (props) => {
	const {
		children,
		className,
	} = props;

	return (
		<div className={ `page ${ className }` }>
			{ children }
		</div>
	);
};

export default Page;
