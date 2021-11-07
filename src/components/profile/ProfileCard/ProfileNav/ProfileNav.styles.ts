import styled from 'styled-components';
import { Button } from 'components/common/buttons/Button/Button';
import { hexToRGB } from 'utils/utils';

interface BtnProps {
  isActive: boolean;
  color: 'primary' | 'error' | 'warning' | 'success';
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const Btn = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<BtnProps>`
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.05)};
  }

  ${(props) => props.isActive && `background-color: ${hexToRGB(props.theme.colors.main.primary, 0.05)}`};

  & > span:first-of-type {
    padding: 0.625rem;
    border-radius: 10px;
    margin-right: 0.5rem;

    color: ${(props) => props.theme.colors.main[props.color]};

    background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.05)};
  }
`;
