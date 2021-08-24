import styled from 'styled-components';
import { Layout } from 'antd';
import bg from '../../../assets/images/bg.png';
import theme from '../../../styles/theme';

const { Header } = Layout;

export default styled(Header)`
  background: linear-gradient(0deg, rgba(0, 89, 171, 0.4), rgba(0, 89, 171, 0.4)), url(${bg});
  background-size: cover;

  padding: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};

  height: ${(props) => props.theme.desktopLayout.headerHeight};

  line-height: ${(props) => props.theme.desktopLayout.headerLineHeight};

  margin-bottom: ${(props) =>
    `calc(${props.theme.desktopLayout.contentOffset} - ${props.theme.desktopLayout.headerHeight})`};

  @media only screen and ${theme.media.xxl} {
    height: 21rem;
  }
`;
