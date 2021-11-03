import { Button } from 'components/common/buttons/Button/Button';
import { hexToRGB } from 'utils/utils';
import styled, { css } from 'styled-components';

interface BtnProps {
  isNightMode: boolean;
}

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  &.ant-btn-icon-only.ant-btn-sm {
    height: 1.875rem;
  }
`;

export const ButtonGroup = styled.div<BtnProps>`
  display: inline-flex;
  padding: 0.325rem;
  column-gap: 0.325rem;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => hexToRGB(props.theme.colors.main.primary, 0.1)};

  ${(props) =>
    props.isNightMode
      ? css`
          & > ${Btn}:first-of-type {
            background: ${props.theme.colors.main.primary};
            color: ${props.theme.colors.text.secondary};
          }
        `
      : css`
          & > ${Btn}:last-of-type {
            background: ${props.theme.colors.main.warning};
            color: ${props.theme.colors.text.secondary};
          }
        `}

  &:not(:last-of-type) {
    margin-bottom: 0.625rem;
  }
`;
