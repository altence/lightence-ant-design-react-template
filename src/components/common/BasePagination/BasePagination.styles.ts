import styled, { css } from 'styled-components';
import { Pagination as AntdPagination } from 'antd';

export const Pagination = styled(AntdPagination)`
  ${(props) =>
    !props.disabled &&
    css`
      .ant-pagination-item:not(.ant-pagination-item-active) {
        &:hover,
        &:focus-visible {
          a {
            color: var(--primary-color);
          }
        }
      }

      .ant-pagination-item-active:focus-visible {
        a {
          color: var(--ant-primary-5);
        }

        border-color: var(--ant-primary-5);
      }

      &.ant-pagination-mini {
        .ant-pagination-prev,
        .ant-pagination-next {
          &:not(.ant-pagination-disabled) {
            &:hover,
            &:focus-visible {
              .ant-pagination-item-link {
                color: var(--primary-color);
                background-color: transparent;
              }
            }
          }
        }

        .ant-pagination-item:not(.ant-pagination-item-active):hover {
          background-color: transparent;
        }
      }

      &:not(.ant-pagination-mini) {
        .ant-pagination-prev,
        .ant-pagination-next {
          &:focus-visible .ant-pagination-item-link {
            color: var(--primary-color);
            border-color: var(--primary-color);
          }
        }

        .ant-pagination-item:not(.ant-pagination-item-active):focus-visible {
          border-color: var(--primary-color);
        }
      }
    `}

  .ant-select-arrow {
    color: var(--disabled-color);
  }
`;
