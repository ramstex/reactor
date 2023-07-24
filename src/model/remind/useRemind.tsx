import Api from '../../modules/api/index';

import type { TRemindModel } from './types';

const useRemind: TRemindModel = () => {
	return {
		/**
		 * Sends a query to the reminding endpoint to restore password.
		 *
		 * @param { FormData } data - Reminding form data
		 * @param { Headers= } headers - Http headers for reminding query
		 * @returns { TRemindResponse } - Object containing a reminding result
		 */
		remind: async ( data: FormData, headers?: Headers ) => {
			return await Api.post(
				Api.routes.login,
				data,
				headers
			);
		},
	};
}

export default useRemind;
