import styled from 'styled-components';
import { Card as AntCard } from 'antd';
import { CardProps } from './Card';

export const Card = styled(AntCard)<CardProps>`
  display: flex;
  flex-direction: column;
  height: 100%;

  box-shadow: ${(props) => props.theme.boxShadow};

  & .ant-card-head {
    font-weight: ${(props) => props.theme.commonFontWeight.bold};

    @media only screen and ${(props) => props.theme.media.xl} {
      font-size: ${(props) => props.theme.commonFontSizes.xxl};
    }

    & .ant-card-head-title {
      white-space: unset;
      overflow: unset;
    }
  }

  & .ant-card-body {
    flex-grow: 1;

    padding: ${(props) =>
      typeof props.padding === 'number'
        ? `${props.padding}px`
        : (Array.isArray(props.padding) && `${props.padding[0]}px ${props.padding[1]}px`) || props.padding};
  }
`;
