import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and ${(props) => props.theme.media.md} {
    width: 50%;
    margin-top: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media only screen and ${(props) => props.theme.media.md} {
      margin-bottom: 2rem;
    }
  }
`;
