import type { IComponentProps, TComponent } from '../../../types/types';
import type { ERowAlignH, ERowAlignV } from './helpers';

type TRowAlignH = keyof typeof ERowAlignH;
type TRowAlignV = keyof typeof ERowAlignV;

export interface IRowProps extends IComponentProps {
	alignH?: TRowAlignH,
	alignV?: TRowAlignV,
	tag?: 'div' | 'ul' | 'ol';
	reverse?: boolean,
}

export type TRowComponent = TComponent<IRowProps>
