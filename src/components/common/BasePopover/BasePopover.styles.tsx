import styled from 'styled-components';
import { Popover as AntPopover, ConfigProvider } from 'antd';

export const Popover = styled((props: React.ComponentProps<typeof AntPopover>) => (
  <ConfigProvider
    theme={{
      components: {
        Popover: {
          zIndexPopup: 2000,
          controlHeight: 34,
          sizePopupArrow: 20,
        },
      },
    }}
  >
    <AntPopover {...props} />
  </ConfigProvider>
))``;
