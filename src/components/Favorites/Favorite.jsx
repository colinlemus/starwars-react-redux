import React from 'react';
import Planet from '../Characters/Planet';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/features/favorite/favoriteAPI';

const Favorite = (props) => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '20px' }}>
        <div>{props.character.name}</div>
        <div>{props.character.gender}</div>
        <div>{props.character.birth_year}</div>
        <div><Planet characterData={props.character}/></div>
        <button onClick={() => { dispatch(toggleFavorite(props.character, props.favoriteData))} }>Add/Remove Favorite</button>
      </div>
  )
}

export default Favorite;