import { createSlice } from '@reduxjs/toolkit';
import { EUserAuthStates } from './helper';

const defaultAuthState = EUserAuthStates.registration;

export const userSlice = createSlice( {
	name: 'user',

	initialState: {
		user: null,
		state: defaultAuthState,
	},

	reducers: {
		setUser: ( state, action ) => {
			if ( action.payload ) {
				state.user = action.payload;
			} else {
				state.user = null;
			}

			if ( state.user ) {
				state.state = EUserAuthStates.profile;
			}
		},

		setState: ( state, action ) => {
			state.state = !!state.user
				? EUserAuthStates.profile
				: action.payload || defaultAuthState;
		},
	},
} );

export const {
	setUser,
	setState,
} = userSlice.actions;

export default userSlice.reducer;
