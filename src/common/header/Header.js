import React, { Component } from "react";


import './Header.css';
import logo from "./../../assets/logo.svg";


class Header extends Component {
    render() {
      return ( 
      <div className = "header">
        <img src={logo} className="logo" alt="movies-app-logo" />
        <div>{this.props.children}</div>   
      </div>
      );
    }
  }

  export default Header;