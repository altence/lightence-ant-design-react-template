import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';

export const Steps = styled(AntdSteps)`
  & .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {
    left: 1rem;
  }

  & .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: ${(props) => props.theme.colors.main.primary};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};

    @media only screen and ${(props) => props.theme.media.xs} {
      font-size: ${(props) => props.theme.commonFontSizes.xs};
      width: 100%;
    }

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: ${(props) => props.theme.commonFontSizes.md};
    }
  }

  & .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
    color: ${(props) => props.theme.colors.text.main};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};

    @media only screen and ${(props) => props.theme.media.xs} {
      font-size: ${(props) => props.theme.commonFontSizes.xs};
      width: 100%;
    }

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: ${(props) => props.theme.commonFontSizes.md};
    }
  }

  & .ant-steps-item .ant-steps-item-description {
    padding-bottom: 2.1875rem;

    @media only screen and ${(props) => props.theme.media.md} {
      padding-bottom: 1rem;
    }

    @media only screen and ${(props) => props.theme.media.xl} {
      padding-bottom: 2.1875rem;
    }
  }
`;
