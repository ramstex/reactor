import type { TComponent, IComponentProps, TLinkTarget } from '../../../types/types';
import { TParagraph, TDiv, TSpan } from '../../../types/tags';

export interface ILinkProps extends IComponentProps {
	tag?: TDiv | TParagraph | TSpan;
	href?: string;
	target?: TLinkTarget;
}

export type TLinkComponent = TComponent<ILinkProps>;
