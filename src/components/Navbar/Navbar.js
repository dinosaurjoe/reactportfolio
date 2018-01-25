import React, { Component } from 'react';
import { NavBar } from './Navbar.style';

export class NavComponent extends Component {
  render () {
    return (
      <NavBar>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrowLinks">
            <a href="#" onClick={this.burgerToggle}>Link 1</a>
            <a href="#" onClick={this.burgerToggle}>Link 2</a>
            <a href="#" onClick={this.burgerToggle}>Link 3</a>
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

