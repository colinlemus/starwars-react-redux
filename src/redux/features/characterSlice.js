import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  planetCache: {},
};

// This is a thunk that fetches the character data.
export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    console.log(response.data.results);
    return response.data.results;
  }
);

// This is a thunk that fetches the planet data.
// It also checks the cache to see if the data has already been fetched.
export const fetchPlanet = createAsyncThunk(
  'characters/fetchPlanet',
  async (planetURL, { getState, signal }) => {
    const state = getState();
    const source = axios.CancelToken.source();

    signal.addEventListener('abort', () => {
      source.cancel('Fetching planet was aborted.');
    });

    const checkCacheAndCancelIfNecessary = setInterval(() => {
      if (state.character.planetCache[planetURL]) {
        console.log('Found in cache, request cancelled.');
        source.cancel('Found in cache, request cancelled.');
      }
    }, 100);

    try {
      const response = await axios.get(planetURL, { cancelToken: source.token });
      clearInterval(checkCacheAndCancelIfNecessary);
      return { name: response.data.name, planet: response.data };
    } catch (error) {
      clearInterval(checkCacheAndCancelIfNecessary);
      if (axios.isCancel(error)) {
        console.log('Axios request cancelled:', error.message);
        return state.character.planetCache[planetURL];
      } else {
        throw error;
      }
    }
  }
);

// This is the slice that handles the character data.
// It also handles the planet data, which is stored in a cache.
export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    getCharacterData: (state, action) => {
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
      })
      .addCase(fetchPlanet.fulfilled, (state, action) => {
        const planetData = action.payload;
        state.planetCache[planetData.planet.url] = planetData;
      });
  }
});

export const { getCharacterData } = characterSlice.actions;

export default characterSlice.reducer;
