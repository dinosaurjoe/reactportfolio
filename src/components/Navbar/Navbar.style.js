import styled from 'styled-components';
import { light, orange, yellow, dark } from 'theme/variables';

export const NavBar = styled.div`
     {
      position: fixed;
      top: 0px;
      width: 100%;
      background-color: white;
      z-index: 1;
      overflow: hidden;
      padding: 1em;
      border-bottom: 1px solid white;
      color: ${light};
    }

     a {
        color: ${light};
        margin-left: 40px;
        margin-right: 40px;
    }

     a:visited {
        color: ${light};
    }

    a:hover {
        color: ${dark};
        text-decoration: underline white;
      }

     .navWide {
      display: none;
      margin: 0 auto;
    }

     .navWide .wideDiv {
      text-align: center;
    }

     .navWide .wideDiv a {
      text-decoration: none;
      display: inline-block;
      padding: 0 2em;
    }


     .navNarrow i {
      float: left;
      cursor: pointer;
      color: #000;
    }

     .navNarrow .narrowLinks a {
      text-decoration: none;
      display: block;
      float: left;
      clear: left;
      padding: 0.5em 0;
    }

    .hidden {
      display: none;
    }

    @media (min-width: 480px) {

       .navWide {
        display: block;
      }

       .navNarrow {
        display: none;
      }
    }
`;
