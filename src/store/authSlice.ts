import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, LoginRequest } from '@app/api/auth.api';

export interface AuthSlice {
  token: string;
}

const initialState: AuthSlice = {
  token: '',
};

export const doLogin = createAsyncThunk('auth/login', async (loginPayload: LoginRequest, { rejectWithValue }) =>
  login(loginPayload).catch((err) => rejectWithValue(err.message)),
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
