import styled from 'styled-components';
import { Typography, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  text-align: center;
  line-height: initial;
  position: relative;
  padding: 3.75rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 0px 5px 40px #e6e6e6;
  border-radius: 10px;
  min-width: 10rem;
`;

export const Notification = styled(Badge)`
  position: absolute;
  top: 10%;
  right: 10%;
`;

export const Bell = styled(BellOutlined)`
  font-size: 1.25rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1.75rem;

  &::after {
    content: '';
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;

    background-color: ${(props) => props.theme.colors.basicLight};
  }
`;

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 3rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Subtitle = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.3rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled(Typography.Text)`
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1.8rem;
`;
