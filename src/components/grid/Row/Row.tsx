import classnames from 'classnames';
import type { FC } from 'react';
import type { IComponentProps, TFlexAlignment } from '../../../modules/helper';

import './Row.scss';

interface IRowProps extends IComponentProps {
	alignH?: TFlexAlignment,
	alignV?: TFlexAlignment,
	reverse?: boolean,
}

const Row: FC<IRowProps> = (props) => {
	const {
		children,
		className,
		reverse,
		alignH,
		alignV,
	} = props;

	const rootClass = classnames('row', className, {
		'_reverse': reverse,
		'_align-h': alignH,
		'_align-v': alignV,
	});

	return (
		<div className={ rootClass }>
			{ children }
		</div>
	);
};

export default Row;
