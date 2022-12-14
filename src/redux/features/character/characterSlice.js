import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    getCharacterData: (state, action) => {
      console.log(action.payload)
      state.value = action.payload;
    },
  }, 
});

export const { getCharacterData } = characterSlice.actions;

export default characterSlice.reducer;
