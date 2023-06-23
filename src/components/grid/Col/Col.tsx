import classnames from 'classnames';
import type { FC } from 'react';
import type { IComponentProps, TCols } from '../../../modules/helper';

import './Col.scss';

interface IColProps extends IComponentProps {
	cols?: TCols,
	offset?: TCols,
}

const Col: FC<IColProps> = (props) => {
	const {
		children,
		className,
		cols,
		offset,
	} = props;

	const rootClass: string = classnames('col', className, {
		[`_cols_${ cols }`]: !!cols,
		[`_offset_${ offset }`]: !!offset,
	});

	return (
		<div className={ rootClass }>
			{ children }
		</div>
	);
}

export default Col;
