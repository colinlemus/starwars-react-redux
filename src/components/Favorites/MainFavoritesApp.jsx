import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Hamburger from '../Hamburger';
import Character from '../Characters/Character';
import "../Characters/styles/characters.scss";

const MainFavoritesApp = (props) => {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);

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