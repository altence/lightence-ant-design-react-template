import styled, { css } from 'styled-components';
import { Pagination as AntPagination } from 'antd';

export const Pagination = styled(AntPagination)`
  ${(props) =>
    !props.disabled &&
    css`
      .ant-pagination-item:not(.ant-pagination-item-active) {
        &:hover,
        &:focus-visible {
          a {
            color: ${({ theme }) => theme.primary};
          }
        }
      }

      .ant-pagination-item-active:focus-visible {
        border-color: ${({ theme }) => theme.primary5};

        a {
          color: ${({ theme }) => theme.primary5};
        }
      }

      &.ant-pagination-mini {
        .ant-pagination-prev,
        .ant-pagination-next {
          &:not(.ant-pagination-disabled) {
            &:hover,
            &:focus-visible {
              .ant-pagination-item-link {
                color: ${({ theme }) => theme.primary};
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
            color: ${({ theme }) => theme.primary};
            border-color: ${({ theme }) => theme.primary};
          }
        }

        .ant-pagination-item:not(.ant-pagination-item-active):focus-visible {
          border-color: ${({ theme }) => theme.primary};
        }
      }
    `}

  .ant-select-arrow {
    color: ${({ theme }) => theme.disabled};
  }
`;
