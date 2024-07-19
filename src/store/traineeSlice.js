import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TraineeService from '../services/TraineeService';

const initialState = {
  trainees: [],
  loading: false,
  error: null,
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
      });
  },
});

export default traineeSlice.reducer;
