import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Hamburger from '../Hamburger';
import Character from '../Characters/Character';
import "../Characters/styles/characters.scss";

// This is the main component for the Favorites page. It is a
// functional component that uses the connect function from react-redux
// to connect to the store.
const MainFavoritesApp = (props) => {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);

  // This useEffect hook is used to set the characterData state to the data from the API call in Redux.
  useEffect(() => {
    console.log(props.data);
    if (props.data.favorite.value.length < 1) {
      setTimeout(() => {
        if (props.data.favorite.value) {
          if (loading) {
            setCharacterData(props.data.favorite.value);
            setLoading(false);
          }
        } else {
          if (loading) {
            setCharacterData([]);
            setLoading(false);
          }
        }
      }, 5000);
    } else {
      if (loading) {
        setCharacterData(props.data.favorite.value);
        setLoading(false);
      }
    }
  }, []);

  // This is a ternary operator that checks if the loading state is true or false.
  // If it is true, it will display a loading message. If it is false, it will display
  // the characterData state.
  const loadingFavorites = !loading ? characterData < 1 ? (<div>Please add some favorites!</div>) : (<Character favoriteData={props.data.favorite} favorite={true} />) : (<div>Loading...</div>);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Hamburger />
        </div>
        <div className='col-12 text-center title-text'>
          Favorites
        </div>
      </div>
      <div className='row'>
        <div className='col-12' style={{ position: 'relative', left: '20px' }}>
          {loadingFavorites}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(MainFavoritesApp);