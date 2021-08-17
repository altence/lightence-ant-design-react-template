import styled from 'styled-components';
import { Avatar as AntAvatar, Typography, Rate } from 'antd';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0.375rem;
  max-width: 9.5rem;
  transition: all 0.3s ease;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const Avatar = styled(AntAvatar)`
  display: block;
  margin: 0 auto;
  margin-bottom: 0.625rem;
  width: 100%;
  height: 100%;
  max-width: 8.75rem;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Rating = styled(Rate)`
  font-size: 0.9rem;
`;

export const Title = styled(Typography.Text)`
  display: block;
  font-size: 0.75rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled(Typography.Text)`
  display: block;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Title} {
    margin-bottom: 0.4rem;
  }

  & ${Text} {
    margin-bottom: 0.625rem;
  }
`;

export const VisitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ${Text} {
    font-size: 0.75rem;
  }
`;
