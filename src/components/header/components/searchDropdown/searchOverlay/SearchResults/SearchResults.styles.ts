import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/utils/utils';
import styled from 'styled-components';

export const SearchResultsWrapper = styled.div`
  & > div {
    .ant-typography {
      font-size: 0.875rem;
    }

    & .ant-list-header {
      font-size: 0.75rem;
      padding-bottom: 6px;
      color: ${({ theme }) => theme.primary};

      @media only screen and (${media('md')}) {
        font-size: 0.875rem;
      }
    }

    & .ant-list-items {
      padding-left: 0.5rem;
    }
  }
`;

export const Text = styled(BaseTypography.Text)`
  color: ${({ theme }) => theme.textMain};

  &:hover {
    text-decoration: underline;
  }
`;
