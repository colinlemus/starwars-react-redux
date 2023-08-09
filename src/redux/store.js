import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './features/characterSlice';
import favoriteReducer from './features/favoriteSlice';

// This is the store that combines the reducers.
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
