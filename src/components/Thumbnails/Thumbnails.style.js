import styled, {css} from 'styled-components';

export const Thumbnails = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

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
    margin: 10px;
    width: 150px;
    height: 150px;
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


