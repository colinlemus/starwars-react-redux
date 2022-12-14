import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hamburger from '../Hamburger';
import Character from '../Characters/Character';

class MainFavoritesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: [],
      nameValue: "",
      loading: true,
    }
  }

  handleChange = (event) => {
    this.setState({nameValue: event.target.value});
  }

  componentDidMount = () => {
    console.log(this.props.data);
    if(this.props.data.favorite.value.length < 1) {
      setTimeout(() => {
        if(this.props.data.favorite.value) {
          if(this.state.loading) {
            this.setState({ characterData: this.props.data.favorite.value, loading: false });
          }
        } else {
          if(this.state.loading) {
            this.setState({ characterData: [], loading: false });
          }
        }
      }, 5000);
    } else {
      if(this.state.loading) {
        this.setState({ characterData: this.props.data.favorite.value, loading: false });
      }
    }
  }

  render() {
    let loading = !this.state.loading ? this.state.characterData < 1 ? (<div>Please add some favorites!</div>) : (<Character characterData={this.state.characterData} favorite={true} />) : (<div>Loading...</div>);

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
            {loading}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(MainFavoritesApp)