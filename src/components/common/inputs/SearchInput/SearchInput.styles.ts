import styled from 'styled-components';
import { Space as AntSpace, Input } from 'antd';

const { Search } = Input;

export const SearchInput = styled(Search)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.55rem;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4.36125rem;
  }

  & input {
    font-weight: 600;
    background-color: ${(props) => props.theme.colors.main.lightBackground};

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1rem;
    }

    &::placeholder {
      font-weight: 500;

      color: ${(props) => props.theme.colors.text.main};
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    color: ${(props) => `${props.theme.colors.main.primary}`};
    font-weight: ${(props) => `${props.theme.commonFontWeight.semibold}`};
    font-size: ${(props) => `${props.theme.commonFontSizes.lg}`};
  }

  .ant-input-search-button {
    &.ant-btn .anticon {
      color: ${(props) => `${props.theme.colors.main.primary}`};
    }
    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    border: ${(props) => `1px solid ${props.theme.colors.border.main}`};
    color: ${(props) => `${props.theme.colors.main.primary}`};
  }
`;

export const Space = styled(AntSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
