import { media } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled from 'styled-components';

export const SearchResultsWrapper = styled.div`
  & > div {
    font-size: 0.875rem;

    & .ant-list-header {
      font-size: 0.75rem;
      padding-bottom: 6px;

      color: var(--primary-color);

      @media only screen and ${media.md} {
        font-size: 0.875rem;
      }
    }

    & .ant-list-items {
      padding-left: 0.5rem;
    }
  }
`;

export const Text = styled(Typography.Text)`
  color: var(--text-main-color);

  &:hover {
    text-decoration: underline;
  }
`;
