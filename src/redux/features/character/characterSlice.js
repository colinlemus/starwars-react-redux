import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
  status: 'idle',
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    console.log(response.data.results);
    return response.data.results;
  }
);

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    getCharacterData: (state, action) => {
      //where data lives
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});

export const { getCharacterData } = characterSlice.actions;

export default characterSlice.reducer;
