import { Doctor, getDoctors } from '@app/api/doctors.api';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const doGetDoctors = createAsyncThunk('doctors/doGetDoctors', async (_, { rejectWithValue }) => {
  try {
    return await getDoctors();
  } catch (e) {
    return rejectWithValue(e);
  }
});

interface DoctorsState {
  data: Doctor[];
  error: string;
}

const initialState: DoctorsState = {
  data: [],
  error: '',
};

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: {
    [doGetDoctors.fulfilled.type]: (state, action: PayloadAction<Doctor[]>) => {
      state.data = action.payload;
    },
    [doGetDoctors.rejected.type]: (state, action: PayloadAction<Doctor[]>) => {
      state.data = action.payload;
    },
  },
});

export default doctorsSlice.reducer;
