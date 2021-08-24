import styled from 'styled-components';
import { Layout } from 'antd';
import bg from '../../../assets/images/bg.png';

const { Header } = Layout;

export default styled(Header)`
  background: linear-gradient(0deg, rgba(0, 89, 171, 0.4), rgba(0, 89, 171, 0.4)), url(${bg});
  background-size: cover;

  height: ${(props) => props.theme.mobileLayout.headerHeight};
`;
