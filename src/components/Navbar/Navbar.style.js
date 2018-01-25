import styled, {css} from 'styled-components';

export const Nav = styled.nav`
    nav {
      z-index: 0;
      background-color: #00F;
      overflow: hidden;
      padding: 1em;

      a {
        color: #FFF;
      }

      a:visited {
        color: #FFF;
      }

      border-bottom: 1px solid #000;

      .navWide {
        display: none;
        margin: 0 auto;

        .wideDiv {
          text-align: center;

          a {
            text-decoration: none;
            display: inline-block;
            padding: 0 2em;
          }
        }
      }

      .navNarrow {

        i {
          float: left;
          cursor: pointer;
          color: #FFF;
        }

        .narrowLinks {
          display: none;

          a {
            text-decoration: none;
            display: block;
            float: left;
            clear: left;
            padding: 0.5em 0;
          }
        }
      }
    }

    @media (min-width: 480px) {

      nav {

        .navWide {
          display: block;
        }

        .navNarrow {
          display: none;
        }
      }
    }
    `;
