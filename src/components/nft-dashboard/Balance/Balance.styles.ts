import { Button } from '@app/components/common/buttons/Button/Button';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import { Typography } from 'antd';
import styled, { css } from 'styled-components';

export const TitleText = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 1.25rem;

    font-size: ${FONT_SIZE.xs};
  }
`;

export const TitleBalanceText = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-family: ${FONT_FAMILY.secondary};
  }
`;

export const SubtitleBalanceText = styled(Typography.Text)`
  font-family: ${FONT_FAMILY.secondary};

  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.regular};

  color: var(--text-nft-light-color);
`;

export const TopUpButton = styled(Button)`
  ${(props) =>
    props.type === 'ghost' &&
    css`
      color: var(--text-secondary-color);
    `};
`;
