import styled from 'styled-components';
import { Typography, Badge, Button as AntButton } from 'antd';
import { BellOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: relative;
  padding: 2.6rem 0.375rem 0.375rem 0.375rem;
  box-shadow: 0px 5px 40px #e6e6e6;
  border-radius: 10px;
`;

export const Notification = styled(Badge)`
  position: absolute;
  top: 10%;
  right: 10%;
`;

export const Bell = styled(BellOutlined)`
  font-size: 1.2rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 2.8rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Subtitle = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.25rem;
  position: relative;
  margin-bottom: 0.875rem;

  color: ${(props) => props.theme.colors.primary};

  &::after {
    content: '';
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;

    background-color: ${(props) => props.theme.colors.basicLight};
  }
`;

export const Text = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
`;

export const Button = styled(AntButton)`
  font-size: 0.75rem;
`;
