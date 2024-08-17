import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AttendanceService from '../services/AttendanceService';
import { getFormattedDate } from '../utils/date';

const initialState = {
  todayAttendance: [],
  attendance: {},
  filteredAttendance: { male: [], female: [] },
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

export const fetchAttendancesById = createAsyncThunk(
  'attendance/fetchAttendancesById',
  async (id, thunkAPI) => {
    try {
      const response = await AttendanceService.getById(id);
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
      thunkAPI.dispatch(fetchAttendances());
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

        // Reverse the order of dates (most recent date first)
        const sortedAttendance = Object.keys(action.payload)
          .sort((a, b) => new Date(b) - new Date(a))
          .reduce((acc, date) => {
            acc[date] = action.payload[date];
            return acc;
          }, {});

        state.attendance = sortedAttendance;
        
        console.log("Full Attendance Data:", sortedAttendance);
        // Filter and group by date
        const today = getFormattedDate();
        state.todayAttendance = sortedAttendance[today] || [];

        // Filter attendance by gender
        const filteredAttendance = { male: [], female: [] };
        Object.values(sortedAttendance)
          .flat()
          .forEach((attendance) => {
            if (attendance.trainee.gender == 'MALE') {
              filteredAttendance.male.push(attendance);
            } else if (attendance.trainee.gender == 'FEMALE') {
              filteredAttendance.female.push(attendance);
            }
          });

        state.filteredAttendance = filteredAttendance;
        console.log(state.filteredAttendance);
      })
      .addCase(fetchAttendances.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      .addCase(fetchAttendancesById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttendancesById.fulfilled, (state, action) => {
        state.loading = false;
        state.attendance = action.payload;
      })
      .addCase(fetchAttendancesById.rejected, (state, action) => {
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
        state.error = action.payload?.message;
      });
  },
});

export default attendanceSlice.reducer;
