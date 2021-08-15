import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { media } from '../../../../styles/theme';

export const Select = styled(AntSelect)`
  width: 50%;
  margin: 0 0.15rem;
  font-size: 0.625rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.04);
  border-radius: 7px;

  background-color: ${(props) => props.theme.colors.secondary};

  @media only screen and ${media.md} {
    margin: 0 0.3rem;
  }
`;
