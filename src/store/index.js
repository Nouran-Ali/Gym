import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import traineeReducer from './traineeSlice';
import attendanceReducer from './attendanceSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    trainee: traineeReducer,
    attendance: attendanceReducer,
  },
});

export default store;
