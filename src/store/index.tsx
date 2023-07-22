import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../controllers/user/store';

export default configureStore( { reducer: { user: userReducer } } )
