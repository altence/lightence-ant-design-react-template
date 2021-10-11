import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 330px;
  margin: 0 auto;
  width: 100%;

  @media only screen and ${(props) => props.theme.media.md} {
    max-width: 648px;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    max-width: 1100px;
  }

  // TODO check if we need this

  /* @media only screen and ${(props) => props.theme.media.xxl} {
    max-width: 1800px;
  } */
`;
