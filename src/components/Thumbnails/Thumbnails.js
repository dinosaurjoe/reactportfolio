import React, { Component } from 'react';
import { Thumbnails } from './Thumbnails.style';

export class ThumbComponent extends Component {
  render () {
    return (
      <Thumbnails>
            <a id="single_image1" href="https://github.com/dinosaurjoe"><img src={require('assets/thumb.png')} alt=""/></a>
            <a id="single_image2" href="https://vimeo.com/astula"><img src={require('assets/thumb2.png')} alt=""/></a>
            <a id="single_image3" href="https://www.instagram.com/joeschafermedia/"><img src={require('assets/thumb3.png')} alt=""/></a>
            <span class="stretch"></span>
      </Thumbnails>
    );
  }
};
