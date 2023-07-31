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
				state.state = EUserAuthStates.profile;
			} else {
				state.user = null;
				state.state = defaultAuthState;
			}
		},

		setState: ( state, action ) => {
			state.state = action.payload;
		},
	},
} );

export const {
	setUser,
	setState,
} = userSlice.actions;

export default userSlice.reducer;
