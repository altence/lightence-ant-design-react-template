import styled from 'styled-components';
import { Card } from '@app/components/common/Card/Card';

export const BloodScreeningCard = styled(Card)`
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActiveItem = styled.div`
  background: #ecf6ff;
  height: 3.125rem;
  border-radius: var(--border-radius);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  color: var(--primary-color);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
`;
