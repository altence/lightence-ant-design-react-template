import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
};
