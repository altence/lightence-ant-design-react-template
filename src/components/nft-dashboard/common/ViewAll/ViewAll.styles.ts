import styled, { css } from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

interface ViewAllInternalProps {
  $bordered: boolean;
}

export const ViewAllBtn = styled(Button)<ViewAllInternalProps>`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.medium};

  color: var(--text-main-color);

  ${(props) =>
    props.$bordered &&
    css`
      border-bottom: 0.2px solid var(--border-nft-color);
    `};
`;
