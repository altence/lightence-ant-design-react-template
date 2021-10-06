import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  & + div {
    margin-top: 2rem;
  }
`;
