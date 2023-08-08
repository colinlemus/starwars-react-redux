
import { React, useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Hamburger from '../Hamburger';
import "../../styles/app.scss";
import "./styles/characters.scss";
import Character from './Character';

function MainCharacterApp(props) {
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(props.data);
    if (props.data.character.status === 'pending') {
      console.log('pending');
    }
  
    if (props.data.character.status === 'rejected') {
      console.log('rejected');
    }
  
    if (props.data.character.status === 'fulfilled' && props.data) {
      console.log('fulfilled');
      setCharacterData(props.data.character.value);
      setLoading(false);
      console.log(loading);
    }

    // if (!props.data.character.value) {
    //   let check = setInterval(() => {
    //     console.log(props.data.character);
    //     if (props.data.character.value) {
    //       if (loading) {
    //         setCharacterData(props.data.character.value);
    //         setLoading(false);
    //       }

    //       clearInterval(check);
    //     }
    //   }, 5000);
    // } else {
    //   if (loading) {
    //     setCharacterData(props.data.character.value);
    //     setLoading(false);
    //   }
    // }
  }, [props.data.character.status]);

  let loadingCharacters = !loading ? (<Character characterData={characterData} favoriteData={props.data.favorite} />) : (<div>Loading...</div>);

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
        <div className='col-12' style={{ position: 'relative', left: '20px' }}>
          {loadingCharacters}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(MainCharacterApp)


// class MainCharacterApp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       characterData: [],
//       loading: true,
//     }
//   }

  // componentDidMount = () => {
  //   if(!this.props.data.character.value) {
  //     let check = setInterval(() => {
  //       console.log(this.props.data.character);
  //       if(this.props.data.character.value) {
  //         if(this.state.loading) {
  //           this.setState({ characterData: this.props.data.character.value, loading: false });
  //         }

  //         clearInterval(check);
  //       }
  //     }, 5000);
  //   } else {
  //     if(this.state.loading) {
  //       this.setState({ characterData: this.props.data.character.value, loading: false });
  //     }
  //   }
  // }

//   render() {
//     let loading = !this.state.loading ? (<Character characterData={this.state.characterData} favoriteData={this.props.data.favorite}/>) : (<div>Loading...</div>);

//     return (
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12'>
//             <Hamburger />
//           </div>
//           <div className='col-12 text-center title-text'>
//             Characters
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col-12' style={{ position: 'relative', left: '20px'}}>
//             {loading}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     data: state
//   }
// };

// export default connect(mapStateToProps)(MainCharacterApp)