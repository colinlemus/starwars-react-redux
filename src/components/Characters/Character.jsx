import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Favorite from '../Favorites/Favorite';
import { connect } from 'react-redux';
import "../Favorites/styles/favorites.scss"

function Character(props) {
  const [characterData, setCharacterData] = useState([]);
  const [nameValue, setNameValue] = useState("");

  useEffect(() => {
    setCharacterData(props.characterData);
  }, []);

  const handleChange = (event) => {
    setNameValue(event.target.value);
  }

  return (
    <div>
      {props.favorite ? (<div className='row'>
        <form style={{ marginBottom: "10px" }}>
          <label>
            Search a favorite
            <br />
            <input type="text" name="name" className="favorite-input" value={nameValue} onChange={handleChange} />
          </label>
        </form>
      </div>) : ('')}
      {characterData.map((e, i) =>
        e.name.toLowerCase().indexOf(nameValue.toLowerCase()) > -1 && props.favorite ? (
          <Favorite key={i} character={e} favoriteData={props.data.favorite} />) : nameValue === "" ? (<Favorite key={i} character={e} favoriteData={props.data.favorite} />) : ('')
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(Character);