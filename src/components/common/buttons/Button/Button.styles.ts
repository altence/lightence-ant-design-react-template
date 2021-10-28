import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonType } from 'antd/lib/button';

interface BtnProps {
  type: ButtonType;
}

export const Button = styled(AntButton)<BtnProps>`
  ${(props) =>
    props.type === 'primary' &&
    css`
      &:hover {
        background: ${(props) => props.theme.colors.main.secondary};
        border-color: ${(props) => props.theme.colors.main.secondary};
      }
    `};

  ${(props) =>
    props.type === 'ghost' &&
    css`
      &:hover {
        border-color: ${(props) => props.theme.colors.main.secondary};
        color: ${(props) => props.theme.colors.main.secondary};
      }
    `};

  ${(props) =>
    props.type === 'link' &&
    css`
      & span {
        text-decoration: underline;
      }

      &:hover {
        color: ${(props) => props.theme.colors.main.secondary};
      }
    `};
`;
