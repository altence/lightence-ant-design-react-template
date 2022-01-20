import { Rate, Typography } from 'antd';
import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled(Typography.Text)`
  display: flex;
  line-height: 1.25rem;
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  font-size: ${(props) => props.theme.commonFontSizes.xs};

  color: ${(props) => props.theme.colors.text.dark};
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.main.primary};
`;

export const Rating = styled(Rate)`
  display: flex;
  line-height: 1.15;
`;
