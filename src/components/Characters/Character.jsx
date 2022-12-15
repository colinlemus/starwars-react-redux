import axios from 'axios';
import React, { Component } from 'react';
import Favorite from '../Favorites/Favorite';
import { connect } from 'react-redux';
import "../Favorites/styles/favorites.scss"

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: this.props.characterData,
      favoriteData: this.props.data.favorite,
      nameValue: "",
    }
  }
  
  handleChange = (event) => {
    this.setState({nameValue: event.target.value});
  }

  componentDidMount = () => { 
    console.log(this.state.characterData);
    console.log(this.state.favoriteData);
  }

  getHomeWorld = (e) => { 
    axios.get((e.homeworld)).then((data) => {
      return (<div>{data.data.name}</div>);
    })
  }

  render() {
    return (
      <div>
      {this.props.favorite ? (<div className='row'>
          <form style={{ marginBottom: "10px"}}>
            <label>
              Search a favorite
              <br />
              <input type="text" name="name" className="favorite-input" value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
        </div>) : ('')}
      {this.state.characterData.map((e, i) => 
        e.name.toLowerCase().indexOf(this.state.nameValue.toLowerCase()) > -1 && this.props.favorite ? (
          <Favorite key={i} character={e} favoriteData={this.props.data.favorite} /> ) : this.state.nameValue === "" ? (<Favorite key={i} character={e} favoriteData={this.props.data.favorite} />) : ('')
      )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(Character)