import axios from 'axios';
import React, { Component } from 'react';
import "./styles/planet.scss"
import pinImage from '../../assets/images/pin.png';

// export default function Planet(props) {
//   const [planetName, setPlanetName] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(props.characterData.homeworld)
//       .then(data => {
//         setPlanetName(data.data.name);
//         setLoading(false);
//       })
//   }, []);

//   let loadingPlanet = loading ? (<>Loading Planet...</>) : (planetName);

//   return (
//     <div className="planet-container" >
//       <img src={pinImage} className="planet-image" width={"30px"} />
//       <span className="planet-name">{loadingPlanet}</span>
//     </div>
//   )
// }


export default class Planet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planetName: "",
      loading: true
    }
  }

  componentDidMount = () => {
    axios.get(this.props.characterData.homeworld)
      .then(data => {
        this.setState({ planetName: data.data.name, loading: false })
      })
  }

  render() {
    let loading = this.state.loading ? (<>Loading Planet...</>) : (this.state.planetName);
    return (
      <div className="planet-container" >
        <img src={pinImage} className="planet-image" width={"30px"} />
        <span className="planet-name">{loading}</span>
      </div>
    )
  }
}
