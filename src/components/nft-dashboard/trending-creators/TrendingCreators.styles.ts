import styled from 'styled-components';
import { BaseModal } from '@app/components/common/BaseModal/BaseModal';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { media } from '@app/utils/utils';

export const StoriesModal = styled(BaseModal)`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md - 0.02}px) {
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
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const ArrowBtn = styled(BaseButton)`
  color: ${({ theme }) => theme.nft.textLight};
`;

export const CardWrapper = styled.div`
  margin: 0 0.40625rem;

  @media only screen and (${media('xl')}) {
    margin: 0 0.625rem;
  }
`;
