import styled from 'styled-components';

export const SliderWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  position: absolute;
  top: calc(50% - 4rem);
  left: calc(50% + 6rem);
  transform: translate(-50%, -50%);

  & > button {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
