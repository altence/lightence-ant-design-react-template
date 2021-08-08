import styled from 'styled-components';
import { Avatar as AntAvatar, Typography, Rate } from 'antd';

export const Wrapper = styled.div`
  line-height: initial;
  border-radius: 7px;
  padding: 0.375rem;
  transition: all 0.3s ease;

  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const Avatar = styled(AntAvatar)`
  display: block;
  margin: 0 auto;
  width: 8.5rem;
  height: 8.5rem;
  margin-bottom: 0.4rem;
`;

export const Text = styled(Typography.Text)`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.4rem;
  white-space: nowrap;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;

  & ${Text} {
    font-size: 0.7rem;
    margin-left: 0.4rem;
    margin-bottom: 0;
  }
`;

export const Rating = styled(Rate)`
  font-size: 1rem;

  color: ${(props) => props.theme.colors.star};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
`;

export const Title = styled(Typography.Text)`
  font-size: 0.75rem;
  margin-bottom: 0.3rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const VisitWrapper = styled.div`
  & ${Title} {
    margin-bottom: 0;
  }

  & ${Text} {
    margin-left: 0.625rem;
    margin-bottom: 0;
  }
`;
