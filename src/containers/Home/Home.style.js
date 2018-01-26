import styled, {css} from 'styled-components';
import { light, orange, yellow, dark } from 'theme/variables';

export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  background-image: url('${require('../../assets/cinemagraph.gif')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: center;
  color: white;

  font-size: 2em;

  h1 {
    margin-bottom: 0;
  }
  h3 {
    font-weight: 300;
    font-size: 50px;
  }
`;

export const RevealRight = styled.p`
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-right: 120px;
  margin-left: 120px;
  display: inline-block;
  background-color: ${light};
  box-shadow: 8px 8px 0px ${orange};
  outline-offset: 15px;
  width: 60%
  float: left;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${orange};
    transform-origin: right;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;﻿


export const ProfilePic = styled.div`
  width: 20%;
  height: 40vh;
  padding-left: 40px;
  padding-right: 60px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-right: 120px;
  margin-left: 120px;
  margin-top: 50px;
  float: right;
  padding-top: 10px;
  box-shadow: 8px 8px 0px ${light};
  background-image: url('${require('../../assets/joe.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: inline-block;

  text-align: center;

  `;

export const RevealLeft = styled.p`
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-right: 120px;
  margin-left: 120px;
  background-color: ${dark};
  box-shadow: 8px 8px 0px ${light};
  outline-offset: 15px;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${light};
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;﻿

export const SectionTitle = styled.div`
  width: 30vw;
  text-align: center;
  display: inline-block;
  margin-left: 120px;
  margin-top: 200px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${light};
  box-shadow: 8px 8px 0px ${orange};

  SectionTitle:hover {
    background-color: ${light};
    box-shadow: 8px 8px 0px ${dark};
  }
`
