import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, FONT_FAMILY, media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const Title = styled(BaseTypography.Text)`
  padding: 0 4rem 0.75rem 0;

  font-size: ${FONT_SIZE.xs};

  font-family: ${FONT_FAMILY.secondary};

  border-bottom: 0.2px solid var(--border-nft-color);

  @media only screen and ${media.xl} {
    font-size: ${FONT_SIZE.md};
  }
`;
