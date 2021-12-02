import styled from 'styled-components';
import { ArticleCard } from '../../common/ArticleCard/ArticleCard';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const CardArticle = styled(ArticleCard)`
  filter: none;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
`;
