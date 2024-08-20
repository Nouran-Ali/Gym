import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import inbodiesService from '../services/InbodiesService';

const initialState = {
  inbodies: [],
  loading: false,
  error: null,
};

export const createinbodies = createAsyncThunk(
  'inbodies/createinbodies',
  async (inbodies, thunkAPI) => {
    try {
      const response = await inbodiesService.create(inbodies);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchInbodies = createAsyncThunk(
  'inbodies/fetchInbodies',
  async (_, thunkAPI) => {
    try {
      const response = await inbodiesService.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const inbodySlice = createSlice({
  name: 'inbodies',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInbodies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInbodies.fulfilled, (state, action) => {
        state.loading = false;
        state.inbodies = action.payload;
      })
      .addCase(fetchInbodies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
  },
});

export default inbodySlice.reducer;
