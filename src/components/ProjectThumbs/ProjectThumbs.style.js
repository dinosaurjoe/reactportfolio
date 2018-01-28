import styled, {css} from 'styled-components';
import { light, dark, orange } from 'theme/variables';

export const ProjectThumbs = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: ${light};

    -ms-text-justify: distribute-all-lines;

   a {
    vertical-align: top;
    display: inline-block;
    display: inline;
    zoom: 1;
}
.stretch {
    width: 100%;
    display: inline-block;
    font-size: 0;
    line-height: 0
}
  img {
    width: 42%;

    margin: 40px;
    box-shadow: 8px 8px 0px ${dark};

  }

  img:hover {
    box-shadow: 8px 8px 0px ${orange};
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
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
