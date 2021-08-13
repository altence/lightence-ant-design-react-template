import styled from 'styled-components';
import { Avatar as AntAvatar, Typography, Rate } from 'antd';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 7rem;
  padding: 0.375rem;
  max-width: 9.5rem;
  transition: all 0.3s ease;

  border-radius: ${(props) => props.theme.border.radius};

  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const Title = styled(Typography.Text)`
  display: block;
  font-size: 0.625rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled(Typography.Text)`
  display: block;
  font-weight: 500;
  font-size: 0.625rem;
`;

export const Avatar = styled(AntAvatar)`
  display: block;
  margin: 0 auto;
  margin-bottom: 0.375rem;
  width: 100%;
  height: 100%;
  max-width: 6.25rem;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.125rem;

  & ${Text} {
    margin-left: 0.3rem;
  }
`;

export const Rating = styled(Rate)`
  & .ant-rate-star:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VisitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
