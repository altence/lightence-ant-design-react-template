import styled from 'styled-components';
import theme from 'styles/theme';

export const FilterWrapper = styled.div`
  display: flex;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-bottom: 0.2rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }

  @media only screen and ${theme.media.xxl} {
    margin-bottom: 0.375rem;
  }
`;
