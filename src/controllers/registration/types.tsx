import type { IRegisterResult as IRegisterResultModel } from '../../model/registration/types';
import type { TUserResult } from '../../model/user/types';

export interface IRegisterResult extends IRegisterResultModel {
	user: TUserResult | null;
}

export type TRegister = ( data: FormData, headers?: Headers ) => Promise<IRegisterResult>;
export type TUseRegistration = () => {
	register: TRegister;
};
