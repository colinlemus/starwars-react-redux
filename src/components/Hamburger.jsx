import "../styles/hamburgers.scss";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      hamburgerStatus: false
    }
  }


  handleClick = () => {
    if(!this.state.hamburgerStatus) {
      this.setState({ hamburgerStatus: true });
    } else {
      this.setState({ hamburgerStatus: false });
    }
  }

  render() {
    return (
      <>
      <button className={`hamburger hamburger--collapse ${this.state.hamburgerStatus ? "is-active" : "" }`} type="button" onClick={this.handleClick}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      
      {this.state.hamburgerStatus ? 
      (<div className="hamburger-open">
        <ul>
          <li>
            <Link className="hamburger-item" to="/characters">Characters</Link>
          </li>
          <li>
            <Link className="hamburger-item" to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>) 
      : 
      (<></>)
      }
      </>
    )
  }
}
