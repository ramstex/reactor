import classBuilder from '../../../plugins/classBuilder';

import Container from '../Container/Container';

import './style.scss';

import type { TSectionComponent } from './types';

const Section: TSectionComponent = ( props ) => {
	const {
		className,
		children,
		header,
		body,
		title,
		titleTag = 'h2',
	} = props;

	const classNameRoot = classBuilder( 'section', className );

	const TitleTag = titleTag;

	return (
		<section className={ classNameRoot }>
			<div className={ 'markup-section__header' }>
				<Container { ...header }>
					<TitleTag className={ 'markup-section__title' }>{ title }</TitleTag>
				</Container>
			</div>

			<div className={ 'markup-section__body' }>
				<Container { ...body }>{ children }</Container>
			</div>
		</section>
	);
}

export default Section;
