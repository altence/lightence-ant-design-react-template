import styled from 'styled-components';
import { Button, Typography, Image as AntImage } from 'antd';

export const BtnMore = styled(Button)`
  position: absolute;
  left: 50%;
  top: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  padding: 0.8rem 4.8rem;
  font-size: 1rem;
  opacity: 0;
  z-index: 2;
  transition: all 0.3 ease;

  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};

    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  margin-right: 1.25rem;

  background: ${(props) => props.theme.colors.basicLight};

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 7px;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;

    background: ${(props) => props.theme.colors.primaryGradient};
  }

  &:hover::after,
  &:hover ${BtnMore} {
    opacity: 1;
  }
`;

export const Image = styled(AntImage)`
  width: 370px;
`;

export const Article = styled.div`
  padding: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const Title = styled(Typography.Text)`
  font-size: 1rem;
  font-weight: 500;

  color: ${(props) => props.theme.colors.basicDark};
`;

export const Date = styled(Typography.Text)`
  font-size: 0.75rem;
`;

export const Text = styled(Typography.Text)`
  font-size: 1rem;
`;
