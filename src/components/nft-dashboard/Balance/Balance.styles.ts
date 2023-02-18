import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const TitleText = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 1.25rem;

    font-size: ${FONT_SIZE.xs};
  }
`;

export const TitleBalanceText = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-family: ${FONT_FAMILY.secondary};
  }
`;

export const SubtitleBalanceText = styled(BaseTypography.Text)`
  font-family: ${FONT_FAMILY.secondary};

  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.regular};

  color: var(--text-nft-light-color);
`;
