import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AttendanceService from '../services/AttendanceService';
import { getFormattedDate } from '../utils/date';

const initialState = {
  todayAttendance: [],
  attendance: {},
  filteredAttendance: { male: [], female: [] }, // Added to store filtered data
  loading: false,
  error: null,
  inputErrors: {},
};

export const fetchAttendances = createAsyncThunk(
  'attendance/fetchAttendances',
  async (_, thunkAPI) => {
    try {
      const response = await AttendanceService.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createAttendance = createAsyncThunk(
  'attendance/createAttendance',
  async (traineeData, thunkAPI) => {
    try {
      const response = await AttendanceService.create(traineeData);
      thunkAPI.dispatch(fetchAttendances());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteAttendance = createAsyncThunk(
  'attendance/deleteAttendance',
  async (id, thunkAPI) => {
    try {
      await AttendanceService.delete(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendances.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttendances.fulfilled, (state, action) => {
        state.loading = false;
        state.attendance = action.payload;

        // Filter and group by date
        const today = getFormattedDate();
        state.todayAttendance = action.payload[today] || [];

        // Filter attendance by gender
        const filteredAttendance = { male: [], female: [] };
        Object.values(action.payload)
          .flat()
          .forEach((attendance) => {
            if (attendance.trainee.gender === 'MALE') {
              filteredAttendance.male.push(attendance);
            } else if (attendance.trainee.gender === 'FEMALE') {
              filteredAttendance.female.push(attendance);
            }
          });

        state.filteredAttendance = filteredAttendance;
      })
      .addCase(fetchAttendances.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(createAttendance.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.inputErrors = {};
      })
      .addCase(createAttendance.fulfilled, (state, action) => {
        state.loading = false;
        state.todayAttendance = [action.payload, ...state.todayAttendance];
        state.inputErrors = {};
      })
      .addCase(createAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        state.inputErrors = action.payload.errors || {};
      })
      .addCase(deleteAttendance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAttendance.fulfilled, (state, action) => {
        state.loading = false;
        state.attendance = state.attendance.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteAttendance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default attendanceSlice.reducer;
