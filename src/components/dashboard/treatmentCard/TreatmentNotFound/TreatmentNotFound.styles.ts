import styled from 'styled-components';
import { Image as AntImage } from 'antd';

export const Text = styled.div`
  color: ${(props) => props.theme.colors.main.primary};
  text-align: center;
  font-size: 1.25rem;
  margin: 1rem 0;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Image = styled(AntImage)`
  max-width: 16rem;
`;
