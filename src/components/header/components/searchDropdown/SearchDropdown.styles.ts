import styled from 'styled-components';
import { BasePopover } from '@app/components/common/BasePopover/BasePopover';
import { media } from '@app/utils/utils';

export const Popover = styled(BasePopover)`
  .ant-popover {
    box-shadow: ${({ theme }) => theme.boxShadow};

    @media only screen and (${media('xs')}) and (max-width: ${({ theme }) => theme.breakpoints.md - 0.02}px) {
      width: calc(100vw - 16px);
      max-width: 600px;
    }

    @media only screen and (${media('md')}) {
      width: 323px;
    }
  }
`;
