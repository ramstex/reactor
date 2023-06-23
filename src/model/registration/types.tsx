/**
 * Interface for a response of the registration endpoint
 */
export interface IRegisterApiResponse {
	success: boolean;
	error: string;
}

/**
 * Interface for a result of register function:
 * success { boolean } - Represents success of a registration
 * error { string | null } - In case of registration error, contains an error message. Otherwise, equals null;
 */
export interface IRegisterResult {
	success: boolean;
	error: string | null;
}
export type TRegisterResult = IRegisterResult;

export type TRegister = ( data: FormData, headers?: Headers ) => Promise<IRegisterResult>;

export type TUseRegistration = () => {
	register: TRegister;
};
