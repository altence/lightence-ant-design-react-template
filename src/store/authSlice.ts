import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ResetPasswordRequest,
  login,
  LoginRequest,
  signUp,
  SignUpRequest,
  resetPassword,
  verifySecurityCode,
  SecurityCodePayload,
  NewPasswordData,
  setNewPassword,
} from '@app/api/auth.api';
import { setUser } from '@app/store/userSlice';
import { deleteToken, deleteUser, persistToken, persistUser, readToken } from '@app/services/localStorage.service';

export interface AuthSlice {
  token: string;
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk('auth/login', async (loginPayload: LoginRequest, { dispatch }) =>
  login(loginPayload).then((res) => {
    dispatch(setUser(res.user));
    persistToken(res.token);
    persistUser(res.user);

    return res.token;
  }),
);

export const doSignUp = createAsyncThunk('auth/signUp', async (signUpPayload: SignUpRequest) => signUp(signUpPayload));

export const doResetPassword = createAsyncThunk('auth/resetPassword', async (resetPassPayload: ResetPasswordRequest) =>
  resetPassword(resetPassPayload),
);

export const doVerifySecurityCode = createAsyncThunk(
  'auth/verifySecurityCode',
  async (securityCodePayload: SecurityCodePayload) => verifySecurityCode(securityCodePayload),
);

export const doSetNewPassword = createAsyncThunk('auth/setNewPassword', async (newPasswordData: NewPasswordData) =>
  setNewPassword(newPasswordData),
);

export const doLogout = createAsyncThunk('auth/logout', (payload, { dispatch }) => {
  deleteToken();
  deleteUser();
  dispatch(setUser(null));
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = '';
    });
  },
});

export default authSlice.reducer;
