import styled from 'styled-components';
import { Card as AntCard } from 'antd';
import { CardProps } from './Card';
import { normalizeProp } from 'utils/utils';

export const Card = styled(AntCard)<CardProps>`
  display: flex;
  flex-direction: column;
  height: 100%;

  box-shadow: ${(props) => props.theme.boxShadow};

  .ant-card-head {
    border-bottom: 0;

    font-weight: ${(props) => props.theme.commonFontWeight.bold};

    .ant-card-head-title {
      white-space: unset;
      overflow: unset;
      padding-bottom: 0;
    }

    @media only screen and ${(props) => props.theme.media.xl} {
      font-size: ${(props) => props.theme.commonFontSizes.xxl};

    .ant-card-head-title {
      padding-bottom: 0.25rem;
    }
  }

  .ant-card-body {
    flex-grow: 1;

    padding: ${(props) => props.padding && normalizeProp(props.padding)} !important;
  }
`;
