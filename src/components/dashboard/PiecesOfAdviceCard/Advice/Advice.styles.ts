import styled from 'styled-components';
import { Button, Typography, Image as AntImage } from 'antd';

export const BtnMore = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 4.8rem;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 2;
  transition: all 0.3s ease;
  pointer-events: none;

  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 7px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    border-radius: 7px;
    transition: all 0.3s ease;
    pointer-events: none;

    background: ${(props) => props.theme.colors.primaryGradient};
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    & ${BtnMore} {
      pointer-events: all;
      opacity: 1;
    }
  }
`;

export const Image = styled(AntImage)`
  width: 22rem;
`;

export const InfoWrapper = styled.div`
  padding: 1.25rem;
`;

export const InfoHeader = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
`;

export const Title = styled(Typography.Text)`
  font-weight: 500;
  font-size: 1rem;
  margin-right: 0.625rem;
`;

export const Text = styled(Typography.Text)`
  font-size: 0.75rem;
`;

export const Description = styled(Typography.Text)`
  font-size: 1rem;
`;
