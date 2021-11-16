import styled from 'styled-components';
import theme from '../../../styles/theme';
import { ArticleCard } from '../../common/ArticleCard/ArticleCard';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.625rem;

  @media only screen and ${theme.media.md} {
    gap: 0.625rem;
  }

  @media only screen and ${theme.media.xl} {
    gap: 0.875rem;
  }

  @media only screen and ${theme.media.xxl} {
    gap: 1.25rem;
  }
`;

export const Article = styled(ArticleCard)`
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
