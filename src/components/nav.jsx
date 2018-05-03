import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../images/replay_logo.png";
import "../css/nav.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navContainerLogo">
          <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        </div>
        <div className="AllListings" >
          <Link to={"/"}>All Listings</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
