import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import "./styles/planet.scss"
import pinImage from '../../assets/images/pin.png';

// This is the Planet component. It is a functional 
// component that uses the connect function from react-redux.
function Planet(props) {
  const [planetName, setPlanetName] = useState("");

  // This useEffect hook is used to set the planet name
  // state to the name of the planet from the API call in Redux.
  useEffect(() => {
    const planetURL = props.homeworld;

    if (props.data.character.planetCache && props.data.character.planetCache[planetURL]) {
      setPlanetName(props.data.character.planetCache[planetURL].name);
    } else {
      setPlanetName("Loading Planet...");
    }
  }, [props.homeworld, props.data.character.planetCache]);

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