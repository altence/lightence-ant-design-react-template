import styled from 'styled-components';
import { Card as AntCard } from 'antd';
import { CardProps } from './Card';
import { normalizeProp } from 'utils/utils';
import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';

export const Card = styled(AntCard).withConfig({
  shouldForwardProp: (prop) => !['padding'].includes(prop),
})<CardProps>`
  display: flex;
  flex-direction: column;
  height: 100%;

  box-shadow: var(--box-shadow);

  .ant-card-head {
    border-bottom: 0;

    font-weight: ${FONT_WEIGHT.bold};

    .ant-card-head-title {
      white-space: unset;
      overflow: unset;
      padding-bottom: 0;
    }

    @media only screen and ${media.xl} {
      font-size: ${FONT_SIZE.xxl};

      .ant-card-head-title {
        padding-bottom: 0.25rem;
      }
    }
  }

  .ant-card-body {
    flex-grow: 1;

    padding: ${(props) => props.padding && normalizeProp(props.padding)};
  }

  .ant-card-bordered {
    border-color: #f0f0f0;
  }
`;
