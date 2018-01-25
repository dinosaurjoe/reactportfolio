import styled from 'styled-components';

export const NavBar = styled.div`
     {
      background-color: #CCC;
      overflow: hidden;
      padding: 1em;
      border-bottom: 1px solid #000;
    }

     a {
        color: #000;
    }

     a:visited {
        color: #000;
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
