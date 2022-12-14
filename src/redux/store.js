import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './features/character/characterSlice';
import favoriteReducer from './features/favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer,
    favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
