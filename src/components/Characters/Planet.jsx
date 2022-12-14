import axios from 'axios';
import React, { Component } from 'react';

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
        console.log(data.data);
      })
  }

  render() {
    let loading = this.state.loading ? (<>Loading Planet...</>) : (this.state.planetName);
    return (
      <div>{loading}</div>
    )
  }
}
