import styled from 'styled-components';
import { Modal } from '@app/components/common/Modal/Modal';
import { Button } from '@app/components/common/buttons/Button/Button';
import { BREAKPOINTS, media } from '@app/styles/themes/constants';

export const StoriesModal = styled(Modal)`
  @media only screen and (max-width: ${BREAKPOINTS.md - 0.02}px) {
    top: 0;
    padding: 0;
    margin: 0;
    max-width: 100%;
  }

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-close {
    z-index: 999999;
    top: 1rem;

    color: var(--text-secondary-color);
  }
`;

export const ArrowBtn = styled(Button)`
  color: var(--text-nft-light-color);
`;

export const CardWrapper = styled.div`
  margin: 0 0.40625rem;

  @media only screen and ${media.xl} {
    margin: 0 0.625rem;
  }
`;
