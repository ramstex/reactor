/**
 * Interface and type for a response of the reminding endpoint.
 *
 * success { boolean } - Represents success of a login
 * error { string } - In case of registration error, contains an error message. Otherwise, contains empty string;
 */
interface IRemindResponse {
	success: boolean;
	error: string | null;
}
type TRemindResponse = IRemindResponse;

type TRemindQueryModel = ( data: FormData, headers?: Headers ) => Promise<TRemindResponse>;

export type TRemindModel = () => {
	remind: TRemindQueryModel;
};
