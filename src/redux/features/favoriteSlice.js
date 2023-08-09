import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

// This is where the favorite data is filtered and stored.
export const toggleFavorite = (e, favoriteList) => dispatch => {
  let tempFavorite = favoriteList.value ? favoriteList.value : [];
  
  if(!tempFavorite.includes(tempFavorite.find(el => el.name === e.name))) {
    tempFavorite = [...tempFavorite, e];  
  } else {
    tempFavorite = tempFavorite.filter(el => el.name !== e.name)
  }

  dispatch(handleFavorite(tempFavorite));
}

// This is the slice that handles the favorite data.
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
