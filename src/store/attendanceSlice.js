import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AttendanceServices from '../services/AttendanceServices';

const initialState = {
    attendance: [],
    loading: false,
    error: null,
    inputErrors: {},
};

export const fetchAttendances = createAsyncThunk(
    'attendance/fetchAttendances',
    async (_, thunkAPI) => {
        try {
            const response = await AttendanceServices.getAll();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createNewAttendance = createAsyncThunk(
    'attendance/createNewAttendance',
    async (attendanceData, thunkAPI) => {
        try {
            const response = await AttendanceServices.create(attendanceData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        // Define any additional reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAttendances.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAttendances.fulfilled, (state, action) => {
                state.loading = false;
                state.attendance = action.payload;
            })
            .addCase(fetchAttendances.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(createNewAttendance.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.inputErrors = {};
            })
            .addCase(createNewAttendance.fulfilled, (state, action) => {
                state.loading = false;
                state.attendance.push(action.payload); // Add the new attendance record to the list
                state.inputErrors = {};
            })
            .addCase(createNewAttendance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                state.inputErrors = action.payload.errors || {};
            });
    },
});

export default attendanceSlice.reducer;