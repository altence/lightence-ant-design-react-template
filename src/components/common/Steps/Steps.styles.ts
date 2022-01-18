import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';

export const Steps = styled(AntdSteps)`
  font-size: unset;

  & .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: ${(props) => props.theme.colors.main.primary};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    width: 100%;

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: ${(props) => props.theme.commonFontSizes.md};
    }
  }

  .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: ${(props) => props.theme.colors.text.main};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    width: 100%;

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: ${(props) => props.theme.commonFontSizes.md};
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
