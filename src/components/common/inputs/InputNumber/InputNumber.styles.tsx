import { InputNumber as AntInputNumber, ConfigProvider } from 'antd';
import { forwardRef, ComponentProps } from 'react';
import styled, { css, useTheme } from 'styled-components';

interface InputNumberProps {
  $block?: boolean;
}

export const InputNumber = styled(
  forwardRef<HTMLInputElement, ComponentProps<typeof AntInputNumber>>((props, ref) => {
    const theme = useTheme();
    return (
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              colorPrimary: theme.primary5,
            },
          },
        }}
      >
        <AntInputNumber {...props} ref={ref} />
      </ConfigProvider>
    );
  }),
)<InputNumberProps>`
  ${(props) =>
    props.$block &&
    css`
      display: block;
      width: 100%;
    `};
`;
