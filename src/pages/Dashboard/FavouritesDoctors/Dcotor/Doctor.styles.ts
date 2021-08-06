import styled from 'styled-components';
import { Avatar as AntAvatar, Typography, Rate } from 'antd';

export const Wrapper = styled.div`
  transition: all 0.3s ease;
  padding: 0.375rem 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-radius: 7px;
  }
`;

export const Avatar = styled(AntAvatar)`
  display: block;
  width: 8.75rem;
  height: 8.75rem;
  margin: 0 auto;
  margin-bottom: 0.625rem;
`;

export const Text = styled(Typography.Text)`
  font-size: 1rem;
  font-weight: 500;
  line-height: initial;
  display: block;
  margin-bottom: 0.68rem;
  white-space: nowrap;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & ${Text} {
    font-size: 0.75rem;
    margin-left: 0.43rem;
    line-height: unset;
  }
`;

export const InfoWrapper = styled.div`
  padding: 0 1.25rem;
`;

export const Rating = styled(Rate)`
  font-size: 0.93rem;
  margin-bottom: 1rem;
  line-height: initial;

  color: ${(props) => props.theme.colors.star};
`;

export const Title = styled(Typography.Text)`
  font-size: 0.75rem;
  line-height: initial;
  display: block;
  margin-bottom: 0.3rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const VisitWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & ${Title} {
    margin-bottom: 0;
  }

  & ${Text} {
    font-size: 0.75rem;
    margin-bottom: 0;
  }
`;
