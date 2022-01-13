import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '@app/domain/UserModel';

export interface UserState {
  user: UserModel | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
