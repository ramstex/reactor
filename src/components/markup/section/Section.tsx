import classnames from 'classnames';

import type { FC, ReactNode } from 'react';
import { IComponentProps } from '../../../modules/helper';

import './Section.scss';

interface ISectionProps extends IComponentProps {
	title?: ReactNode,
}

const Section: FC<ISectionProps> = (props) => {
	const {
		className,
		children,
		title,
	} = props;

	const rootClass = classnames('section', className);

	return (
		<section className={ rootClass }>
			{
				!!title &&
				<header className={ 'section__header' }>
					{ title }
				</header>
			}

			<div className={ 'section__body' }>
				{ children }
			</div>
		</section>
	);
};

export default Section;
