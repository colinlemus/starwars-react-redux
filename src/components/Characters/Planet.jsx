import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./styles/planet.scss"
import pinImage from '../../assets/images/pin.png';

export default function Planet(props) {
  const [planetName, setPlanetName] = useState("");
  const [loading, setLoading] = useState(true);
  const planetCache = new Map();

  //TODO:
  //collect list of planets all 1 call and add to hashmap
  //use hashmap to get planet name

  useEffect(() => {
    console.log(planetCache);
    if (planetCache.has(props.characterData.homeworld)) {
      setPlanetName(planetCache.get(props.characterData.homeworld));
      setLoading(false);
    } else {
      axios.get(props.characterData.homeworld)
        .then(data => {
          setPlanetName(data.data.name);
          setLoading(false);
          // Save data to cache
          planetCache.set(props.characterData.homeworld, data.data.name);
        })
    }
  }, []); 

  let loadingPlanet = loading ? (<>Loading Planet...</>) : (planetName);

  return (
    <div className="planet-container" >
      <img src={pinImage} className="planet-image" width={"30px"} />
      <span className="planet-name">{loadingPlanet}</span>
    </div>
  )
}