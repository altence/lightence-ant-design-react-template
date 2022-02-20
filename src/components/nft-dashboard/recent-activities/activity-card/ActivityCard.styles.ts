import styled from 'styled-components';
import { Card } from '@app/components/common/Card/Card';
import { Button } from '@app/components/common/buttons/Button/Button';

export const CardStyled = styled(Card)`
  width: 100%;

  .ant-card-body {
    padding: 0;
  }
`;

export const CollectionImage = styled.img`
  width: 100%;
  height: 126px;
  object-fit: cover;
  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export const NftCollectionInfo = styled.div`
  position: relative;
  padding: 1rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuthorAvatarWrapper = styled.div`
  position: absolute;
  top: -45px;
  height: 70px;
  width: 70px;
  border: 3px solid white;
  border-radius: 50%;
`;

export const AuthorImg = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
`;

export const BidButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 12px 33px;
  color: white;
  border-color: white;
  border-radius: 14px;
  //font-family: Lato;
  //font-weight: 500;
  //font-size: 12px;
  //line-height: 14px;
`;
