import classnames from 'classnames';
import type { FC } from 'react';
import type { IComponentProps } from '../../../modules/helper';

import './Container.scss';

interface IContainerProps extends IComponentProps {
	wide?: boolean,
	tight?: boolean,
}

const Container: FC<IContainerProps> = (props) => {
	const {
		children,
		className,
		wide,
		tight,
	} = props;

	const rootClass = classnames('container', className, {
		'_wide': wide,
		'_tight': tight,
	});

	return (
		<div className={ rootClass }>
			{ children }
		</div>
	);
};

export default Container;
