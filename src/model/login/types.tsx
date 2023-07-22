/**
 * Interface and type for a response of the login endpoint.
 *
 * success { boolean } - Represents success of a login
 * error { string } - In case of registration error, contains an error message. Otherwise, contains empty string;
 */
interface ILoginResponse {
	success: boolean;
	error: string | null;
}
type TLoginResponse = ILoginResponse;

type TLoginQueryModel = ( data: FormData, headers?: Headers ) => Promise<TLoginResponse>;

export type TLoginModel = () => {
	login: TLoginQueryModel;
};
