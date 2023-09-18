import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/utils/utils';
import styled from 'styled-components';

export const WrapperRow = styled(BaseRow)`
  margin-bottom: 1.5rem;

  @media only screen and (${media('xl')}) {
    margin-bottom: 2.625rem;
  }
`;

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.md};

    @media only screen and (${media('xl')}) {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;
