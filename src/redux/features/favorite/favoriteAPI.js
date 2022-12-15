import { handleFavorite } from './favoriteSlice';

export const toggleFavorite = (e, favoriteList) => dispatch => {
  let tempFavorite = favoriteList.value ? favoriteList.value : [];
  
  if(!tempFavorite.includes(tempFavorite.find(el => el.name === e.name))) {
    tempFavorite = [...tempFavorite, e];  
  } else {
    tempFavorite = tempFavorite.filter(el => el.name !== e.name)
  }

  dispatch(handleFavorite(tempFavorite));
}