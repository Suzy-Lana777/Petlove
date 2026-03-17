import type { RootState } from '../store';

// Повертає об'єкт користувача (name, email)
export const selectUser = (state: RootState) => state.auth.user;

// Повертає true/false: чи авторизований юзер
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

// Повертає статус: чи йде зараз фонова перевірка токена
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;