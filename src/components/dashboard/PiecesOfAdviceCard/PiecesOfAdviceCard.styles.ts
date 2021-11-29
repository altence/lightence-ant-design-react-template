import styled from 'styled-components';
import theme from '../../../styles/theme';
import { AdviceCard } from '../../common/AdviceCard/AdviceCard';
import { Card as CommonCard } from '../../common/Card/Card';

export const Card = styled(CommonCard)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and ${theme.media.md} {
    gap: 0.875rem;
  }

  @media only screen and ${theme.media.xl} {
    gap: 1.25rem;
  }
`;

export const Advice = styled(AdviceCard)`
  && {
    flex: 0.5;
    min-width: 40%;

    @media only screen and ${theme.media.xs} {
      min-width: 100%;
    }

    @media only screen and ${theme.media.md} {
      min-width: 40%;
    }
  }
`;
