import { EColCols } from './helpers';

import type { IComponentProps, TComponent, TNumericRange } from '../../../types/types';

type TColCols = TNumericRange<1, 12> | keyof typeof EColCols;
type TColOffset = TNumericRange<1, 12> | EColCols.auto;

export interface IColProps extends IComponentProps {
	cols?: TColCols,
	offset?: TColOffset,
	tag?: 'li' | 'div'
}

export type TColComponent = TComponent<IColProps>;
