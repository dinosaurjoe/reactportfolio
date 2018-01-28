import React, { Component } from 'react';
import { Background } from './App.style';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

ReallySmoothScroll.config({
  mousewheelSensitivity: 6, // Default
  keydownSensitivity: 6 // Default (When you press arrow down/up key)
});

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        {this.props.children}
      </div>
    );
  }
}

export default App;
