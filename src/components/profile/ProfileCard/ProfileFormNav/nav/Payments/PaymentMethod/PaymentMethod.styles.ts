import { Button } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1rem;
  }
`;

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

export const AddBtn = styled(Button)`
  width: 100%;

  @media only screen and ${(props) => props.theme.media.md} {
    max-width: 15rem;
  }
`;
