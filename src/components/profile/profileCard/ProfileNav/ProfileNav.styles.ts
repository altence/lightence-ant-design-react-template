import styled, { css } from 'styled-components';
import { Button } from 'components/common/buttons/Button/Button';

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
  justify-content: unset;
  width: 100%;

  &:hover {
    background-color: rgba(var(--primary-rgb-color), 0.05);
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: rgba(var(--primary-rgb-color), 0.05);
    `};

  & > span:first-of-type {
    padding: 0.625rem;
    border-radius: 10px;
    margin-right: 0.5rem;

    color: ${(props) => `var(--${props.color}-color)`};

    background-color: rgba(var(--primary-rgb-color), 0.05);
  }
`;
