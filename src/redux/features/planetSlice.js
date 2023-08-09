import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
};

// This is a thunk that fetches the planet data.
export const fetchPlanets = createAsyncThunk(
  'planets/fetchPlanets',
  async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    console.log(response.data.results);
    return response.data.results;
  }
);

// This is the slice that handles the planet data.
export const planetSlice = createSlice({
  name: 'planet',
  initialState,
  reducers: {
    getPlanetData: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPlanets.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPlanets.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.characters = action.payload;
      })
      .addCase(fetchPlanets.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});

export const { getPlanetData } = characterSlice.actions;

export default characterSlice.reducer;
