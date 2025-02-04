import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import transactionReducer from './transactionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionReducer,
  },
});
