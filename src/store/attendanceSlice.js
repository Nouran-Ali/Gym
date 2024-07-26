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

export const createAttendance = createAsyncThunk(
    'attendance/createAttendance',
    async (traineeData, thunkAPI) => {
        try {
            const response = await AttendanceServices.create(traineeData);
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
            await AttendanceServices.delete(id);
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
                console.log('🚀 ~ .addCase ~ action.payload:', action.payload);
                state.attendance.push(action.payload);
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
                state.attendance = state.attendance.filter(item => item.id !== action.payload);
            })
            .addCase(deleteAttendance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export default attendanceSlice.reducer;
