import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import "./styles/planet.scss"
import pinImage from '../../assets/images/pin.png';

function Planet(props) {
  const [planetName, setPlanetName] = useState("");

  useEffect(() => {
    const planetURL = props.characterData.homeworld;

    if (props.data.character.planetCache && props.data.character.planetCache[planetURL]) {
      setPlanetName(props.data.character.planetCache[planetURL].name);
    } else {
      setPlanetName("Loading Planet...");
    }
  }, [props.characterData.homeworld, props.data.character.planetCache]);

  return (
    <div className="planet-container" >
      <img src={pinImage} className="planet-image" width={"30px"} />
      <span className="planet-name">{planetName}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(Planet)