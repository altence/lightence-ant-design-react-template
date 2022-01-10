import styled from 'styled-components';
import { Breadcrumb as AntBreadcrumb } from 'antd';
export const { Item } = AntBreadcrumb;

export const BreadcrumbItem = styled(Item)`
  cursor: pointer;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.main.primary};

  &:hover {
    color: ${(props) => props.theme.colors.main.secondary};
  }
`;
export const Breadcrumb = styled(AntBreadcrumb)`
  & span:last-child {
    span {
      color: ${(props) => props.theme.colors.text.main};
    }
    span:hover {
      color: ${(props) => props.theme.colors.main.secondary};
    }
  }
`;
