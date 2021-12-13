import styled from 'styled-components';
import { Card as CommonCard } from 'components/common/Card/Card.styles';

export const Card = styled(CommonCard)`
  width: 100%;
  margin-bottom: 1.25rem;
  .ant-card-head-title {
    font-size: 1rem;
  }
  .ant-card-body {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    align-items: center;
  }
`;

export const InputsWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
