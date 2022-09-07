import { Button } from '@app/components/common/buttons/Button/Button';
import styled, { css } from 'styled-components';

export const TopUpButton = styled(Button)`
  ${(props) =>
    props.type === 'ghost' &&
    css`
      color: var(--text-secondary-color);
    `};
`;
