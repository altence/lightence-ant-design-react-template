import styled from 'styled-components';
import { Typography, Badge, Button as AntButton } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { media } from '../../../../../styles/theme';

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(40% - 0.25rem);
  position: relative;
  text-align: center;
  padding: 2.6rem 0.375rem 0.375rem 0.375rem;
  border-radius: 10px;
  margin-right: 0.5rem;
  box-shadow: 0px 5px 40px #e6e6e6;
  flex-shrink: 0;

  @media only screen and ${media.xxl} {
    padding: 5rem 0.5rem 0.5rem 0.5rem;
  }
`;

export const Notification = styled(Badge)`
  position: absolute;
  top: 10%;
  right: 10%;
`;

export const Bell = styled(BellOutlined)`
  font-size: 1.2rem;

  color: ${(props) => props.theme.colors.primary};

  @media only screen and ${media.xxl} {
    font-size: 1.6rem;
  }
`;

export const Title = styled(Typography.Text)`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: initial;

  color: ${(props) => props.theme.colors.primary};

  @media only screen and ${media.md} {
    font-size: 3.1rem;
  }
`;

export const Subtitle = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1.25rem;
  position: relative;
  margin-bottom: 0.875rem;
  line-height: initial;

  color: ${(props) => props.theme.colors.primary};

  @media only screen and ${media.md} {
    font-size: 1.3rem;
  }

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

  @media only screen and ${media.md} {
    font-size: 1.37rem;
  }

  @media only screen and ${media.xxl} {
    font-size: 1.5rem;
  }
`;

export const Button = styled(AntButton)`
  font-size: 0.75rem;

  @media only screen and ${media.xxl} {
    font-size: 1rem;
  }
`;
