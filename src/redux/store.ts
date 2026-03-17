import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
// Сюди додамо інші редюсери пізніше (news, notices...)

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // Це налаштування ігнорує деякі технічні перевірки для швидкодії
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Типи для TypeScript (допоможуть нам бачити підказки в коді)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;