import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import inbodiesService from '../services/InbodiesService';

export const fetchInbodies = createAsyncThunk("inbodies/fetchAll", async () => {
  const data = await inbodiesService.fetchAll();
  return data;
});

export const createinbodies = createAsyncThunk(
  "inbodies/create",
  async (newMeasurement) => {
    const data = await inbodiesService.create(newMeasurement);
    return data;
  }
);

const inbodySlice = createSlice({
  name: "inbodies",
  initialState: {
    inbodies: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInbodies.fulfilled, (state, action) => {
        state.inbodies = action.payload;
      })
      .addCase(createinbodies.fulfilled, (state, action) => {
        state.inbodies.push(action.payload);
      });
  },
});

export default inbodySlice.reducer;

