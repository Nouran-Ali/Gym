import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AttendanceServices from "../services/AttendanceServices";

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

// export const createNewTrainee = createAsyncThunk(
//     'attendance/createNewAttendance',
//     async (traineeData, thunkAPI) => {
//         try {
//             const response = await TraineeService.create(traineeData);
//             return response;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

const traineeSlice = createSlice({
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
            // .addCase(createNewTrainee.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            //     state.inputErrors = {};
            // })
            // .addCase(createNewTrainee.fulfilled, (state, action) => {
            //     state.loading = false;
            //     console.log('🚀 ~ .addCase ~ action.payload:', action.payload);
            //     state.attendance.push(action.payload); // Add the new trainee to the list
            //     state.inputErrors = {};
            // })
            // .addCase(createNewTrainee.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload.message;
            //     state.inputErrors = action.payload.errors || {};
            // });
    },
});

export default traineeSlice.reducer;