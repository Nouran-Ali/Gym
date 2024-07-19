import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import traineeReducer from './traineeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    trainee: traineeReducer,
  },
});

export default store;
