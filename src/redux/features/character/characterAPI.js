import axios from 'axios';
import { getCharacterData } from './characterSlice';

export const fetchCharacters = () => async dispatch => {
  try {
    await axios.get("https://swapi.dev/api/people").then((data) => {
      console.log(data.data.results)
      dispatch(getCharacterData(data.data.results));
    })
  } catch(e) {
    console.log(e.message);
  }
}