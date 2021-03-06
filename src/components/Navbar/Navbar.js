import React, { Component } from 'react';
import { NavBar } from './Navbar.style';

export class NavComponent extends Component {
  render () {
    return (
      <NavBar>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#top" id="homea">Home</a>
            <a href="#about" id="abouta">About</a>
            <a href="#projects" id="projectsa">Projects</a>
            <a href="#contact" id="contacta">Contact</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrowLinks">
            <a href="#" onClick={this.burgerToggle}>About</a>
            <a href="#" onClick={this.burgerToggle}>About</a>
            <a href="#" onClick={this.burgerToggle}>Projects</a>
            <a href="#" onClick={this.burgerToggle}>Contact</a>
          </div>
        </div>
      </NavBar>
    );
  }

  burgerToggle () {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

};


