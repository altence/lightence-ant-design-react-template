import styled from 'styled-components';
import { BasePopover } from '@app/components/common/BasePopover/BasePopover';
import { media, mediaRange } from '@app/utils/utils';

export const Popover = styled(BasePopover)`
  .ant-popover {
    box-shadow: ${({ theme }) => theme.boxShadow};

    @media only screen and (${mediaRange('xs', 'md')}) {
      width: calc(100vw - 16px);
      max-width: 600px;
    }

    @media only screen and (${media('md')}) {
      width: 323px;
    }
  }
`;
