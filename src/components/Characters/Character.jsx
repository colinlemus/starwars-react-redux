import React, { useEffect, useState } from 'react';
import Favorite from '../Favorites/Favorite';
import { connect } from 'react-redux';
import "../Favorites/styles/favorites.scss"

function Character(props) {
  const [characterData, setCharacterData] = useState([]);
  const [nameValue, setNameValue] = useState("");
  const [loading, setLoading] = useState(true);

  // This useEffect is used to set the characterData state to the data from the API call in Redux.
  useEffect(() => {
    switch (props.data.character.status) {
      case 'pending':
        console.log('pending');
        break;
      case 'rejected':
        console.log('rejected');
        break;
      case 'fulfilled':
        if (props.data) {
          console.log('fulfilled');
          if(props.favorite) {
            setCharacterData(props.data.favorite.value);
          } else {
            setCharacterData(props.data.character.characters);
          }
        }
        break;
      default:
        break;
    }
  }, [props.data.character.status]);

  useEffect(() => {
    if (characterData.length > 0) {
      setLoading(false);
    }
  }, [characterData]);

  const handleChange = (event) => {
    setNameValue(event.target.value);
  }

  // This is a ternary operator that checks if the loading state is true or false. 
  // If it is true, it will display a loading message. If it is false, it will display 
  // the characterData state.
  let loadingCharacters = !loading ? (<>{characterData.map((e, i) =>
    e.name.toLowerCase().indexOf(nameValue.toLowerCase()) > -1 && props.favorite ? (
      <Favorite key={i} character={e} favoriteData={props.data.favorite} />) : nameValue === "" ? (<Favorite key={i} character={e} favoriteData={props.data.favorite} />) : ('')
  )}</>) : (<div>Loading...</div>);

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
      {loadingCharacters}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(Character);