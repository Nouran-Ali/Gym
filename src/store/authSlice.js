import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';

const token = localStorage.getItem('token');

const initialState = {
  user: null,
  isAuthenticated: !!token,
  loading: false,
  error: null,
  inputErrors: {},
};

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await AuthService.login(data);
    localStorage.setItem('token', response.token);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.me();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('token');
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.inputErrors = {};
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload.user;
        state.isAuthenticated = true;
        state.inputErrors = {};
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        state.inputErrors = action.payload.errors || {};
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
