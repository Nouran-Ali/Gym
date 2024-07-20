import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TraineeService from '../services/TraineeService';

const initialState = {
  trainees: [],
  loading: false,
  error: null,
  inputErrors: {},
};

export const fetchTrainees = createAsyncThunk(
  'trainees/fetchTrainees',
  async (_, thunkAPI) => {
    try {
      const response = await TraineeService.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createNewTrainee = createAsyncThunk(
  'trainees/createNewTrainee',
  async (traineeData, thunkAPI) => {
    try {
      const response = await TraineeService.create(traineeData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const traineeSlice = createSlice({
  name: 'trainees',
  initialState,
  reducers: {
    // Define any additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrainees.fulfilled, (state, action) => {
        state.loading = false;
        state.trainees = action.payload;
      })
      .addCase(fetchTrainees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(createNewTrainee.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.inputErrors = {};
      })
      .addCase(createNewTrainee.fulfilled, (state, action) => {
        state.loading = false;
        console.log('🚀 ~ .addCase ~ action.payload:', action.payload);
        state.trainees.push(action.payload); // Add the new trainee to the list
        state.inputErrors = {};
      })
      .addCase(createNewTrainee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        state.inputErrors = action.payload.errors || {};
      });
  },
});

export default traineeSlice.reducer;
