import styled from 'styled-components';
import { Button } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';

interface BtnProps {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const Btn = styled(Button)<BtnProps>`
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.05)};
  }

  & > span:first-of-type {
    font-size: 1.25rem;
    padding: 0.625rem;
    border-radius: 10px;
    margin-right: 0.5rem;

    color: ${(props) => props.theme.colors.main[props.color]};

    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.05)};
  }
`;
