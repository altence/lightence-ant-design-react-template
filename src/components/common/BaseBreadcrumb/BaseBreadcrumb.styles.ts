import styled from 'styled-components';
import { Breadcrumb as AntBreadcrumb } from 'antd';

export const Breadcrumb = styled(AntBreadcrumb)`
  &.ant-breadcrumb {
    li:last-child {
      .ant-breadcrumb-link {
        color: ${({ theme }) => theme.textMain};
      }
    }
  }
`;
