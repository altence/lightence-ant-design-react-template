import styled from 'styled-components';
import { Button } from 'antd';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;

  @media only screen and ${theme.media.md} {
    height: 150px;
    min-width: 300px;
  }

  @media only screen and ${theme.media.xxl} {
    height: 220px;
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Link = styled(Button)`
  font-size: inherit;
  width: 100%;

  color: ${(props) => props.theme.colors.secondary};
`;

export const FilterWrapper = styled.div`
  padding: 0.875rem;
  width: 120px;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
  white-space: nowrap;
  cursor: pointer;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }

  @media only screen and ${theme.media.xxl} {
    margin-bottom: 0.625rem;
  }
`;
