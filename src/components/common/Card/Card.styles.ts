import styled from 'styled-components';
import { Card as AntCard } from 'antd';
import { normalizeProp } from 'utils/utils';
import { ThemeType } from '@app/interfaces/interfaces';

interface CardInternalProps {
  $padding: string | number | [number, number];
  $autoHeight: boolean;
  $theme: ThemeType;
}

export const Card = styled(AntCard)<CardInternalProps>`
  display: flex;
  flex-direction: column;

  ${(props) => props.$autoHeight && 'height: 100%'};

  box-shadow: ${(props) => props.theme.boxShadow.main};

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
  }

  .ant-card-body {
    flex-grow: 1;

    padding: ${(props) => props.$padding && normalizeProp(props.$padding)};
  }
`;
