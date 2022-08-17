import { FONT_WEIGHT, FONT_SIZE } from '@app/styles/themes/constants';
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
  font-weight: ${FONT_WEIGHT.semibold};
  font-size: ${FONT_SIZE.xs};

  color: var(--text-dark-color);
`;

export const Title = styled(Text)`
  color: var(--primary-color);
`;

export const Rating = styled(Rate)`
  display: flex;
  line-height: 1.15;
`;
