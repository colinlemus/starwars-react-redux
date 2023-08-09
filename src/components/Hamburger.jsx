import "../styles/hamburgers.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

// This is the Hamburger component. It is a functional
// component that uses the useState hook from React.
// It is used to toggle the hamburger menu.
const Hamburger = () => {
  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  const handleClick = () => {
    if(!hamburgerStatus) {
      setHamburgerStatus(true);
    } else {
      setHamburgerStatus(false);
    }
  }

  return (
    <>
    <button className={`hamburger hamburger--collapse ${hamburgerStatus ? "is-active" : "" }`} type="button" onClick={handleClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
    
    {hamburgerStatus ? 
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

export default Hamburger;