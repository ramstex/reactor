/**
 * Interface and type for a response of the registration endpoint.
 *
 * success { boolean } - Represents success of a registration
 * error { string } - In case of registration error, contains an error message. Otherwise, contains empty string;
 */
interface IRegisterResponse {
	success: boolean;
	error: string | null;
}
type TRegisterResponse = IRegisterResponse;

type TRegisterQueryModel = ( data: FormData, headers?: Headers ) => Promise<TRegisterResponse>;

export type TRegistrationModel = () => {
	register: TRegisterQueryModel;
};
