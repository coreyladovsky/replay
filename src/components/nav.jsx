import React from 'react';
import logo from '../images/replay_logo.png';
import "../css/nav.css";

class NavBar extends React.Component {
  render () {
    return(
      <div className="navContainer">
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default NavBar;
