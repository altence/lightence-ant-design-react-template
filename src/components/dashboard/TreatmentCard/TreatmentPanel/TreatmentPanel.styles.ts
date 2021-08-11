import styled from 'styled-components';
import { Typography, Badge, Button as AntButton } from 'antd';
import { BellOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 100%;
  text-align: center;
  position: relative;
  padding: 5rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 0px 5px 40px #e6e6e6;
  border-radius: 10px;
`;

export const Notification = styled(Badge)`
  position: absolute;
  top: 10%;
  right: 10%;
`;

export const Bell = styled(BellOutlined)`
  font-size: 1.8rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 3rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Subtitle = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.3rem;
  position: relative;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.colors.primary};

  &::after {
    content: '';
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;

    background-color: ${(props) => props.theme.colors.basicLight};
  }
`;

export const Text = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const Button = styled(AntButton)`
  margin-top: auto;
`;
