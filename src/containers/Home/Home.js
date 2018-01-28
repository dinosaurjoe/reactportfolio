import React, { Component, PropTypes } from 'react';
import { Container, AboutContainer } from 'theme/grid';
import {
  Image,
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

export default class Home extends Component {
  static propTypes = {};

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

          <SectionTitle2>
          <h1>Projects</h1>
          </SectionTitle2>

          <ProjectThumbComponent>
          </ProjectThumbComponent>
          <WhenInView>
            {({ isInView }) =>
            <RevealLeft hide={!isInView}>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </RevealLeft>
             }
          </WhenInView>
        </Container>
      );
  }
}
