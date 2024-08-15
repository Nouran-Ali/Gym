import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import traineeReducer from './traineeSlice';
import attendanceReducer from './attendanceSlice';
import inbodiesReducer from './inbodySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    trainee: traineeReducer,
    attendance: attendanceReducer,
    inbodies: inbodiesReducer,
  },
});

export default store;
