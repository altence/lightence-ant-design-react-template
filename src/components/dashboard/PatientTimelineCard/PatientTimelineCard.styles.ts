import { Typography } from 'antd';
import styled from 'styled-components';

interface ItemProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 1.4rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const IconWrapper = styled.div<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 1.5rem;
  position: relative;

  background-color: ${(props) => (props.isActive && props.theme.colors.primary) || props.theme.colors.basicLight};

  color: ${(props) => (props.isActive && props.theme.colors.secondary) || props.theme.colors.primary};

  &::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 200%;
    background: ${(props) => props.theme.colors.basic};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<ItemProps>`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.25rem;

  color: ${(props) => props.isActive && props.theme.colors.primary};
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled(Typography.Text)`
  font-size: 0.625rem;
  margin-left: 0.625rem;
`;

export const Description = styled(Typography.Text)`
  margin-top: 0.5rem;
`;
