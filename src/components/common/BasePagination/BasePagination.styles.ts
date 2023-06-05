import styled from 'styled-components';
import { Pagination as AntdPagination } from 'antd';

export const Pagination = styled(AntdPagination)`
  .ant-pagination-item-container .ant-pagination-item-ellipsis {
    color: var(--disabled-color);
  }

  :not(.ant-pagination-disabled) {
    .ant-pagination-item:focus-visible {
      a {
        color: var(--ant-primary-color);
      }
      border-color: var(--ant-primary-color);
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      &:focus-visible {
        .ant-pagination-item-link {
          color: var(--ant-primary-color);
          border-color: var(--ant-primary-color);
        }
      }
    }
  }

  &.ant-pagination-disabled {
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      &:focus-visible,
      &:hover {
        .ant-pagination-item-link-icon {
          opacity: 0;
        }
        .ant-pagination-item-ellipsis {
          opacity: 1;
        }
      }
    }
  }

  .ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: var(--disabled-color);
    }
  }

  &.ant-pagination.ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: var(--disabled-color);
    }
  }

  & .ant-select-arrow {
    color: var(--disabled-color);
  }

  .ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    color: var(--disabled-color);
  }
`;
