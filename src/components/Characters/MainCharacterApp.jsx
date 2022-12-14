
import { React, Component } from 'react';
import { connect } from 'react-redux';
import Hamburger from '../Hamburger';
import "../../styles/app.scss";
import "./styles/characters.scss";
import Character from './Character';

class MainCharacterApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: [],
      loading: true,
    }
  }

  componentDidMount = () => {
    if(!this.props.data.character.value) {
      let check = setInterval(() => {
        console.log(this.props.data.character);
        if(this.props.data.character.value) {
          if(this.state.loading) {
            this.setState({ characterData: this.props.data.character.value, loading: false });
          }

          clearInterval(check);
        }
      }, 5000);
    } else {
      if(this.state.loading) {
        this.setState({ characterData: this.props.data.character.value, loading: false });
      }
    }
  }

  render() {
    let loading = !this.state.loading ? (<Character characterData={this.state.characterData} favoriteData={this.props.data.favorite}/>) : (<div>Loading...</div>);

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
          <div className='col-12' style={{ position: 'relative', left: '20px'}}>
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

export default connect(mapStateToProps)(MainCharacterApp)