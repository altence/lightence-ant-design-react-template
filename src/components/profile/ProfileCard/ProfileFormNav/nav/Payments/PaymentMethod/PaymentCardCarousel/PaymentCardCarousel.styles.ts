import styled from 'styled-components';

export const SliderWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  & > button {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
