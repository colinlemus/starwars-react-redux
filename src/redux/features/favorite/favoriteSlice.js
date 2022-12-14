import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    handleFavorite: (state, action) => {
      state.value = action.payload;
    }
  }, 
});

export const { handleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
