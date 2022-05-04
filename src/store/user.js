import { createSlice } from '@reduxjs/toolkit';

export const RouterSlice = createSlice({
	name: 'user',

	initialState: {
		data: null,
	},

	reducers: {
		set(state, action) {
			if (action && action.payload) {
				state.data = action.payload;
			} else {
				state.data = null;
			}
		},

		login(state) {
			state.data = {
				first_name: 'Roman',
				last_name: 'Polunin',
				login: 'RamsteX',
				email: 'ramstex88@gmail.com',
			};
		},

		logout(state) {
			state.data = null;
		},
	},
});

export const { set } = RouterSlice.actions;

export default RouterSlice.reducer;
