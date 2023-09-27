import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../services/user/store';

export default configureStore( { reducer: { user: userReducer } } )
