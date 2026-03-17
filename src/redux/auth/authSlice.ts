import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Описуємо, як виглядають наші дані про користувача
interface User {
  name: string | null;
  email: string | null;
  token: string | null;
}

interface AuthState {
  user: User;
  isLoggedIn: boolean;
  isRefreshing: boolean; // Потрібно для перевірки токена при перезавантаженні
}

const initialState: AuthState = {
  user: { name: null, email: null, token: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Тимчасовий екшен для перевірки: вхід користувача вручну
    setCredentials: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.user = { name: null, email: null, token: null };
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;