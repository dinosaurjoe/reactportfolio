import React, { Component } from 'react';
import { ProjectThumbs } from './ProjectThumbs.style';

export class ProjectThumbComponent extends Component {
  render () {
    return (
      <ProjectThumbs>
            <a id="project1" href="#https://anothervu.herokuapp.com/"><img src={require('assets/project1.png')} alt=""/></a>
            <a id="project2" href="#https://www.zentangle.io/"><img src={require('assets/project2.png')} alt=""/></a>
            <a id="project3" href="#http://astulainc.com/"><img src={require('assets/project3.png')} alt=""/></a>
            <a id="project4" href="#http://apexphotography.herokuapp.com/index.html"><img src={require('assets/project4.png')} alt=""/></a>
            <span class="stretch"></span>
      </ProjectThumbs>
    );
  }
};
