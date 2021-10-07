import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and ${(props) => props.theme.media.md} {
    width: calc(50% - 10px);
  }

  & > button {
    width: calc(50% - 0.5rem);
  }
`;
