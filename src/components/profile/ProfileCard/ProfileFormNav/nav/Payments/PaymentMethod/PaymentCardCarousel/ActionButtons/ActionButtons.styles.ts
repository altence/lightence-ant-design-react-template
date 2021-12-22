import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  position: absolute;
  column-gap: 1rem;
  top: 13%;
  right: 7%;

  & > button {
    padding: 0;
    width: unset;
    height: unset;

    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
