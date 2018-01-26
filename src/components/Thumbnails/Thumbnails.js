import React, { Component } from 'react';
import { Thumbnails } from './Thumbnails.style';

export class ThumbComponent extends Component {
  render () {
    return (
      <Thumbnails>
            <a id="single_image1" href="#"><img src={require('assets/thumb.png')} alt=""/></a>
            <a id="single_image2" href="#"><img src={require('assets/thumb2.png')} alt=""/></a>
            <a id="single_image3" href="#"><img src={require('assets/thumb3.png')} alt=""/></a>
            <a id="single_image4" href="#"><img src={require('assets/thumb4.png')} alt=""/></a>
            <a id="single_image3" href="#"><img src={require('assets/thumb5.png')} alt=""/></a>
            <span class="stretch"></span>
      </Thumbnails>
    );
  }
};
