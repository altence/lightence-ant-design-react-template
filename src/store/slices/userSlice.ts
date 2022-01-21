import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '@app/domain/UserModel';
import { readUser } from '@app/services/localStorage.service';

export interface UserState {
  user: UserModel | null;
}

const initialState: UserState = {
  user: readUser(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
