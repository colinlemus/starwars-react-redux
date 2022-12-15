import React, { useEffect } from 'react';
import Planet from '../Characters/Planet';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/features/favorite/favoriteAPI';
import heartFilled from '../../assets/images/heart-filled.png';
import heartEmpty from '../../assets/images/heart-empty.png'

const Favorite = (props) => {
  const dispatch = useDispatch();

  const favoritedCharacters = props.favoriteData.value.filter((el) => el.name === props.character.name);

  return (
    <div className='character-container'>
        <div className='character-name'>{props.character.name}</div>
        <div className='character-gender'>{props.character.gender.includes("n/a") ? (<>n/a</>) : props.character.gender[0].toUpperCase() + props.character.gender.substring(1).toLowerCase()} | {props.character.birth_year}</div>
        <div className='character-planet'><Planet characterData={props.character}/></div>
        <button className='character-favorite' onClick={() => { console.log(props.favoriteData) 
          dispatch(toggleFavorite(props.character, props.favoriteData))} }>
          {favoritedCharacters.length === 0 ? (<img src={heartEmpty} width="20px" height="20px" />) : 
            favoritedCharacters.map((e, i) => {
              return (<img key={i} src={heartFilled} width="20px" height="20px" />);
            })
          }
        </button>
      </div>
  )
}

export default Favorite;