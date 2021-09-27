import styled from 'styled-components';
import { Button } from 'antd';
import { hexToRGB } from 'src/helpers/hexToRGB';

interface BtnProps {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Btn = styled(Button)<BtnProps>`
  font-weight: 600;
  height: unset;
  width: 100%;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  & > span:first-of-type {
    font-size: 1.25rem;
    padding: 0.625rem;
    border-radius: 10px;
    margin-right: 0.5rem;

    color: ${(props) => props.theme.colors.main[props.color]};

    ${(props) => `background-color: ${hexToRGB(props.theme.colors.main.primary, 0.05)}`};
  }

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }

  &:hover {
    ${(props) => `background-color: ${hexToRGB(props.theme.colors.main.primary, 0.05)}`};
  }
`;
