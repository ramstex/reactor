import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './user.js';

export default configureStore({
	reducer: {
		user: UserReducer,
	},
});
