import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./styles/planet.scss"
import pinImage from '../../assets/images/pin.png';

export default function Planet(props) {
  const [planetName, setPlanetName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(props.characterData.homeworld)
      .then(data => {
        setPlanetName(data.data.name);
        setLoading(false);
      })
  }, []);

  let loadingPlanet = loading ? (<>Loading Planet...</>) : (planetName);

  return (
    <div className="planet-container" >
      <img src={pinImage} className="planet-image" width={"30px"} />
      <span className="planet-name">{loadingPlanet}</span>
    </div>
  )
}