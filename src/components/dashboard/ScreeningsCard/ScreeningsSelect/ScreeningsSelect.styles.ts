import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import theme from '../../../../styles/theme';

export const Select = styled(AntSelect)`
  width: 50%;
  margin: 0 0.15rem;
  font-size: 0.625rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.04);

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${theme.media.md} {
    margin: 0 0.3rem;
  }

  @media only screen and ${theme.media.xxl} {
    font-size: 0.75rem;
  }
`;
