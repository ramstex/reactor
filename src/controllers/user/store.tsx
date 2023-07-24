import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice( {
	name: 'user',

	initialState: { user: null },

	reducers: {
		setUser: ( state, action ) => {
			state.user = action.payload || null;
		},
	},
} );

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
