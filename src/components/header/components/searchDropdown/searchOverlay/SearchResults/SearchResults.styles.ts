import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { media } from '@app/utils/utils';
import styled from 'styled-components';

export const SearchResultsWrapper = styled.div`
  & > div {
    .ant-typography {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }

    & .ant-list-header {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
      padding-bottom: 0.375rem;
      color: ${({ theme }) => theme.primary};

      @media only screen and (${media('md')}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
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
