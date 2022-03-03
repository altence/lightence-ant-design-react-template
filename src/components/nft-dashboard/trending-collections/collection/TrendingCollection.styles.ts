import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Typography } from 'antd';

export const CollectionImage = styled.img`
  width: 100%;
  height: 126px;
  object-fit: cover;
  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};
`;

export const NftCollectionInfo = styled.div`
  position: relative;
  padding: 2rem 1.25rem 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${(props) => props.theme.commonFontSizes.md};
  }
`;

export const Text = styled(Typography.Text)`
  font-size: ${(props) => props.theme.commonFontSizes.xxs};
`;

export const AuthorAvatarWrapper = styled.div`
  position: absolute;
  top: -45px;
  height: 70px;
  width: 70px;
  border: 3px solid ${(props) => props.theme.colors.text.secondary};
  border-radius: 50%;

  box-shadow: ${(props) => props.theme.boxShadow.hover};
`;

export const BidButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 12px 33px;
  color: ${(props) => props.theme.colors.text.secondary};
  border-color: ${(props) => props.theme.colors.text.secondary};
  border-radius: 14px;
`;
