import styled from 'styled-components';
import { Button, Typography } from 'antd';
import theme from '../../../styles/theme';
import { CheckOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and ${theme.media.md} {
    height: 150px;
    min-width: 18rem;
  }

  @media only screen and ${theme.media.xxl} {
    height: 220px;
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;

    background-color: ${(props) => props.theme.colors.primary};

    &-thumb {
      border-radius: ${(props) => props.theme.border.radius};

      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Text = styled(Typography.Text)`
  font-size: inherit;
  color: inherit;

  @media only screen and ${theme.media.md} {
    opacity: 0.7;
  }
`;

export const Link = styled(Button)`
  width: 100%;
  color: inherit;
  font-size: inherit;
`;

export const FilterWrapper = styled.div`
  padding: 1rem 0 1rem 1rem;

  @media only screen and ${theme.media.xxl} {
    padding: 2rem 0 2rem 2rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.div`
  position: relative;
  padding-right: 1rem;

  &:not(:nth-last-of-type(1)) {
    margin-bottom: 0.2rem;
  }

  @media only screen and ${theme.media.xxl} {
    padding-right: 2rem;

    &:not(:nth-last-of-type(1)) {
      margin-bottom: 0.375rem;
    }
  }
`;

export const Check = styled(CheckOutlined)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
