import classBuilder from '../../../plugins/classBuilder';

import './style.scss';

import type { TContainerComponent } from './types';

const Container: TContainerComponent = ( props ) => {
	const {
		children,
		className,
		wide,
		tight,
	} = props;

	const classNameRoot = classBuilder( 'container', {
		_wide: wide,
		_tight: tight,
	}, className );

	return <div className={ classNameRoot }>{ children }</div>;
}

export default Container;
