import axios from 'axios';
import React, { Component } from 'react';
import Favorite from '../Favorites/Favorite';
import Planet from './Planet';

export default class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: this.props.characterData,
      nameValue: "",
    }
  }

  handleChange = (event) => {
    this.setState({nameValue: event.target.value});
  }

  componentDidMount = () => { 
    console.log(this.state.characterData);
  }

  getHomeWorld = (e) => { 
    axios.get((e.homeworld)).then((data) => {
      console.log(data.data.name);
      return (<div>{data.data.name}</div>);
    })
  }

  render() {
    return (
      <div>
      {this.props.favorite ? (<div className='row'>
          <form style={{ marginBottom: "10px"}}>
            <label>
              Search:
              <input type="text" name="name" style={{ position: 'relative', left: '10px'}} value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
        </div>) : ('')}
      {this.state.characterData.map((e, i) =>
      e.name.toLowerCase().indexOf(this.state.nameValue.toLowerCase()) > -1 && this.props.favorite ? (
        <div key={i} style={{ marginBottom: '20px' }}>
          <div>{e.name}</div>
          <div>{e.gender}</div>
          <div>{e.birth_year}</div>
          <div><Planet characterData={e}/></div>
        </div> ) : this.state.nameValue === "" ? (<Favorite key={i} character={e} favoriteData={this.props.favoriteData} />) : ('')
      )}
      </div>
    )
  }
}
