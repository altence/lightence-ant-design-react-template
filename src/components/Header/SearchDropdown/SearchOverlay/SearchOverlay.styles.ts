import styled from 'styled-components';
import { Button, Typography } from 'antd';
import theme from '../../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

    border-radius: ${(props) => props.theme.border.radius};

    background-color: ${(props) => props.theme.colors.main.primary};

    &-thumb {
      border-radius: ${(props) => props.theme.border.radius};

      background-color: ${(props) => props.theme.colors.main.mainBackground};
    }
  }

  @media only screen and ${theme.media.md} {
    height: 130px;
  }

  @media only screen and ${theme.media.xxl} {
    height: 150px;
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
