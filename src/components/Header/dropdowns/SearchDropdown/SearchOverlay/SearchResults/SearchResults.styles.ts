import styled from 'styled-components';

export const SearchResultsWrapper = styled.div`
  & > div {
    font-size: 0.875rem;

    & .ant-list-header {
      font-size: 0.75rem;
      padding-bottom: 6px;

      color: ${(props) => props.theme.colors.main.primary};

      @media only screen and ${(props) => props.theme.media.md} {
        font-size: 0.875rem;
      }
    }

    & .ant-list-items {
      padding-left: 0.5rem;

      & a {
        color: ${(props) => props.theme.colors.text.main};
      }
    }
  }
`;
