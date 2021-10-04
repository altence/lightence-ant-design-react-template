import styled from 'styled-components';
import { Button } from 'antd';
import { hexToRGB } from 'helpers/hexToRGB';

interface BtnProps {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Btn = styled(Button)<BtnProps>`
  display: flex;
  align-items: center;
  height: unset;
  width: 100%;
  margin-bottom: 1.25rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }

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
