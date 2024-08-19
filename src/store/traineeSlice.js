import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TraineeService from '../services/TraineeService';

const initialState = {
  trainees: [],
  trainee: null,
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

export const fetchTraineeById = createAsyncThunk(
  'trainees/fetchTraineeById',
  async (id, thunkAPI) => {
    try {
      const response = await TraineeService.getById(id);
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

export const updateTrainee = createAsyncThunk(
  'trainees/updateTrainee',
  async (userData, thunkAPI) => {
    try {
      const response = await TraineeService.updateTrainee(userData);
      thunkAPI.dispatch(fetchTrainees());
      return response.data;
    } catch (error) {
      // console.log(error)
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteTrainee = createAsyncThunk(
  'trainees/deleteTrainee',
  async (id, thunkAPI) => {
    try {
      await TraineeService.delete(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const traineeSlice = createSlice({
  name: 'trainees',
  initialState,
  reducers: {},
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

      .addCase(fetchTraineeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTraineeById.fulfilled, (state, action) => {
        state.loading = false;
        state.trainee = action.payload;
        console.log("🚀 ~ .addCase ~ action.payload:", action.payload)
      })
      .addCase(fetchTraineeById.rejected, (state, action) => {
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
        state.trainees.push(action.payload);
        state.inputErrors = {};
      })
      .addCase(createNewTrainee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        state.inputErrors = action.payload.errors || {};
      })
      .addCase(updateTrainee.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTrainee.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateTrainee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(deleteTrainee.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTrainee.fulfilled, (state, action) => {
        state.loading = false;
        state.trainees = state.trainees.filter(
          (trainee) => trainee.id !== action.payload
        );
      })
      .addCase(deleteTrainee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default traineeSlice.reducer;
