import { media } from '@app/styles/themes/light/lightTheme';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import { Card } from '../../../common/Card/Card';

export const DoctorCard = styled(Card)`
  margin: 1rem;
`;

export const Title = styled(Typography.Text)`
  font-size: var(--font-size-xxs);

  font-weight: var(--font-weight-medium);

  color: var(--primary-color);

  @media only screen and ${media.md} {
    font-size: var(--font-size-xs);
  }

  @media only screen and ${media.xxl} {
    font-size: var(--font-size-md);
  }
`;

export const Text = styled(Typography.Text)`
  font-size: var(--font-size-xs);

  font-weight: var(--font-weight-semibold);

  @media only screen and ${media.md} {
    font-size: var(--font-size-md);
  }

  @media only screen and ${media.xxl} {
    font-size: var(--font-size-lg);
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  margin: -1rem -1rem 0;

  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

  & > div {
    display: block;
  }
`;

export const Rating = styled(Rate)`
  display: flex;
  font-size: var(--font-size-xxs);

  @media only screen and ${media.md} {
    font-size: var(--font-size-lg);
  }
`;
