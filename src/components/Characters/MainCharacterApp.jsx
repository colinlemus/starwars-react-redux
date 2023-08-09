
import { React } from 'react';
import { connect } from 'react-redux';
import Hamburger from '../Hamburger';
import "../../styles/app.scss";
import "./styles/characters.scss";
import Character from './Character';

function MainCharacterApp(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Hamburger />
        </div>
        <div className='col-12 text-center title-text'>
          Characters
        </div>
      </div>
      <div className='row'>
        <div className='col-12' style={{ position: 'relative', left: '20px' }}>
          <Character favoriteData={props.data.favorite} />
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

export default connect(mapStateToProps)(MainCharacterApp)