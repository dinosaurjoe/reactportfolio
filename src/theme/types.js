import styled from 'styled-components';
import { light } from 'theme/variables';

export const A = styled.a`
  color: ${light};
  text-decoration: none;
  position: relative;

  &:after {
    content: ''
  }
`;
