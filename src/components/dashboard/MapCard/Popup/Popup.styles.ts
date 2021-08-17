import styled from 'styled-components';
import { Typography, Avatar as AntAvatar, Rate } from 'antd';
import { Popup as LPopup } from 'react-leaflet';

export const Wrapper = styled(LPopup)`
  & .leaflet-popup-content-wrapper {
    border-radius: ${(props) => props.theme.colors.border.radius};
  }

  & .leaflet-popup-content {
    display: flex;
    align-items: center;
    margin: 0.375rem 0.75rem 0.375rem 0.375rem;
  }

  & .leaflet-popup-close-button {
    display: none;
  }
`;

export const Avatar = styled(AntAvatar)`
  flex-grow: 1;
  flex-shrink: 0;
  height: 100%;
  margin-right: 0.4rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  line-height: initial;
`;

export const Title = styled(Typography.Text)`
  margin-right: 0.4rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Rating = styled(Rate)`
  font-size: 0.9rem;
  margin-right: 0.4rem;

  color: ${(props) => props.theme.colors.accent};
`;
