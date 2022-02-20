import styled from 'styled-components';
import { Card } from '@app/components/common/Card/Card';

export const CardStyled = styled(Card)`
  width: 100%;

  .ant-card-body {
    padding: 0;
  }
`;

export const NftImage = styled.img`
  width: 100%;
  height: 195px;
  object-fit: cover;
  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export const NftInfo = styled.div`
  padding: 1rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
