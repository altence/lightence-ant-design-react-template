import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
  width: 100%;
  border: 1px solid #35a0dc;
  border-radius: ${(props) => props.theme.border.radius};
  cursor: pointer;
`;
