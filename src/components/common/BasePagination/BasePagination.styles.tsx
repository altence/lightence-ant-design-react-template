import styled, { css, useTheme } from 'styled-components';
import { Pagination as AntPagination, ConfigProvider } from 'antd';
import { remToPixels } from '@app/utils/utils';

export const Pagination = styled((props: React.ComponentProps<typeof AntPagination>) => {
  const theme = useTheme();
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: theme.primary,
            controlItemBgActiveDisabled: '#e6e6e6',
            itemSizeSM: 24,
            controlHeightLG: remToPixels(theme.heights.sm),
          },
        },
      }}
    >
      <AntPagination {...props} />
    </ConfigProvider>
  );
})`
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
