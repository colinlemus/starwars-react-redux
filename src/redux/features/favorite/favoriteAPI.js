import { handleFavorite } from './favoriteSlice';

export const toggleFavorite = (e, favoriteList) => dispatch => {
  let tempFavorite = favoriteList.value ? favoriteList.value : [];
  if(!tempFavorite.includes(e)) {
    tempFavorite = [...tempFavorite, e];  
  } else {
    tempFavorite = tempFavorite.filter((el) => {
      return el !== e;
    });
  }
  
  dispatch(handleFavorite(tempFavorite));
}