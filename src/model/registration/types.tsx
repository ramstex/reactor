/**
 * Interface for a response of the registration endpoint
 */
interface IRegisterResponse {
	success: boolean;
	error: string;
}
export type TRegisterResponse = IRegisterResponse;

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

export type TRegister = ( data: FormData, headers?: Headers ) => Promise<TRegisterResponse>;

export type TUseRegistration = () => {
	register: TRegister;
};
