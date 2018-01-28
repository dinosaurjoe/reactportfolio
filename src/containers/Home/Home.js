import React, { Component } from 'react';
import { Container } from 'theme/grid';
import {
  HeroImage,
  RevealLeft,
  RevealRight,
  SectionTitle,
  ProfilePic,
  SectionTitle2
   } from './Home.style';
import WhenInView from 'components/WhenInView/WhenInView';
import { NavComponent } from 'components/Navbar/Navbar';
import { ThumbComponent } from 'components/Thumbnails/Thumbnails';
import { ProjectThumbComponent } from 'components/ProjectThumbs/ProjectThumbs';
import { ContactFormComponent } from 'components/ContactForm/ContactForm';

export default class Home extends Component {

  render() {
    return (
        <Container id="top">
        <NavComponent>
        </NavComponent>
          <HeroImage>
            <h1>Joe Schafer</h1>
            <h3>Web Developer / Digital Media Specialist</h3>
          </HeroImage>

            <SectionTitle>
                <h1>About</h1>
            </SectionTitle>

            <ProfilePic id="about">
            </ProfilePic>

          <WhenInView>
            {({ isInView }) =>
              <RevealRight hide={!isInView}>
                Welcome to my portfolio. My name is Joe Schafer, I'm a digital media specialist and a Front-end developer. I started my professional career in video and, over the years, have gained an interest in web development and programming languages. Feel free to check out my projects and if you're interested in collaborating send me an email!
              </RevealRight>
               }
          </WhenInView>

          <WhenInView>
            {({ isInView }) =>
              <ThumbComponent hide={!isInView}>
              </ThumbComponent>
            }
          </WhenInView>

          <SectionTitle2 id="projects">
          <h1>Projects</h1>
          </SectionTitle2>

          <WhenInView>
            {({ isInView }) =>
            <RevealLeft hide={!isInView}>
              Here is a selection of some of the projects I've worked on in the past year using Ruby on Rails, HTML, CSS and Adobe Muse.
            </RevealLeft>
             }
          </WhenInView>
          <ProjectThumbComponent>
          </ProjectThumbComponent>
          <ContactFormComponent id="contactform">
          </ContactFormComponent>
        </Container>
      );
  }
}
