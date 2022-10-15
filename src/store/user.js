import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice( {
	name: 'user',

	initialState: {
		user: null,
		isUser: false,
	},

	reducers: {
		setUser: ( state, action ) => {
			state.user = action.payload;
			state.isUser = true;
		},

		unsetUser: ( state ) => {
			state.user = null;
			state.isUser = false;
		},
	},
} );

export const {
	setUser,
	unsetUser,
} = userSlice.actions;

export default userSlice.reducer;
