import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';

export default {
  user: userReducer,
  auth: authReducer,
};
