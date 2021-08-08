import styled from 'styled-components';
import { Typography } from 'antd';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.basicLight};
  }
`;

export const Title = styled(Typography.Text)`
  margin-bottom: 0.625rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;

  color: ${(props) => props.theme.colors.basic};
`;

export const Description = styled(Typography.Text)`
  font-size: 0.75rem;
  transition: all 0.3s ease;

  color: ${(props) => props.theme.colors.basic};
`;

export const Item = styled.div`
  padding: 0.875rem 2rem;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: all 0.3s ease;

  &:hover {
    & {
      background-color: ${(props) => props.theme.colors.primaryLight};
    }

    & ${Title}, & ${Description} {
      color: ${(props) => props.theme.colors.basicDark};
    }
  }

  &:nth-last-of-type(1) {
    display: none;
  }
`;

export const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  box-shadow: 0px 5px 15px rgba(8, 138, 152, 0.3);
  border-radius: 7px;
  margin-right: 1.875rem;
  flex-shrink: 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
