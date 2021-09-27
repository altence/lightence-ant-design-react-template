import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    width: calc(50% - 0.5rem);
  }
`;
