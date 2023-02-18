import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { BaseRate } from '@app/components/common/BaseRate/BaseRate';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import styled from 'styled-components';
import { BaseCard } from '../../../common/BaseCard/BaseCard';

export const DoctorCard = styled(BaseCard)`
  margin: 1rem;
`;

export const Title = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xxs};

  font-weight: ${FONT_WEIGHT.medium};

  color: var(--primary-color);

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xs};
  }

  @media only screen and ${media.xxl} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.semibold};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.md};
  }

  @media only screen and ${media.xxl} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  margin: -1rem -1rem 0;

  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};

  & > div {
    display: block;
  }
`;

export const Rating = styled(BaseRate)`
  display: flex;
  font-size: ${FONT_SIZE.xxs};

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.lg};
  }
`;
