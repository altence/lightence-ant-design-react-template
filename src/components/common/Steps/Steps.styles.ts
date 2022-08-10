import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';
import { media } from '@app/styles/themes/light/lightTheme';

export const Steps = styled(AntdSteps)`
  font-size: unset;

  & .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: var(--primary-color);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    /* width: 100%; */

    @media only screen and ${media.md} {
      font-size: var(--font-size-md);
    }
  }

  .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: var(--text-main-color);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xs);
    /* width: 100%; */

    @media only screen and ${media.md} {
      font-size: var(--font-size-md);
    }
  }

  .ant-steps-item-container {
    display: flex;
    align-items: baseline;
  }

  &.ant-steps-vertical {
    .ant-steps-item-container {
      align-items: flex-start;
    }
  }
  &.ant-steps-vertical.ant-steps-small {
    .ant-steps-item-container .ant-steps-item-tail {
      padding: 1.625rem 0 0.375rem;
    }
  }
`;
