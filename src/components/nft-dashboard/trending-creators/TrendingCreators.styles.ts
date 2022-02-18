import styled from 'styled-components';
import { Modal } from '@app/components/common/Modal/Modal';
import { Button } from '@app/components/common/buttons/Button/Button';

export const StoriesModal = styled(Modal)`
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md - 0.02}px) {
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

    color: ${(props) => props.theme.colors.text.secondary};
  }
`;

export const ArrowBtn = styled(Button)`
  color: ${(props) => props.theme.colors.text.nftLight};
`;

export const CardWrapper = styled.div`
  margin: 0 0.40625rem;

  @media only screen and ${(props) => props.theme.media.xl} {
    margin: 0 0.625rem;
  }
`;
