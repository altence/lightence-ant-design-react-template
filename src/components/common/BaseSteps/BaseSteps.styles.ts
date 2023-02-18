import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';
import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';

export const Steps = styled(AntdSteps)`
  font-size: unset;

  & .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.xs};

    @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
    }
  }

  .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: var(--text-main-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.xs};

    @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
    }
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    border-color: var(--disabled-color);

    & > .ant-steps-icon {
      color: var(--disabled-color);
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
  & .ant-steps-item {
    &:not(.ant-steps-item-process) {
      .ant-steps-item-description {
        color: var(--subtext-color);
      }
    }
    .ant-steps-item-subtitle {
      color: var(--subtext-color);
    }
  }
`;
