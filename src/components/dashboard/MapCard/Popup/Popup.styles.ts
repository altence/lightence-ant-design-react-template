import styled from 'styled-components';
import { Typography, Avatar as AntAvatar, Rate } from 'antd';
import { Popup as LPopup } from 'react-leaflet';

export const Wrapper = styled(LPopup)`
  & .leaflet-popup-content-wrapper {
    border-radius: 7px;
  }

  & .leaflet-popup-content {
    display: flex;
    align-items: center;
    width: unset;
    margin: 0;
    padding: 0.375rem;
  }

  & .leaflet-popup-close-button {
    display: none;
  }
`;

export const Avatar = styled(AntAvatar)`
  width: 3.18rem;
  height: 3.18rem;
  margin-right: 0.43rem;
  flex-shrink: 0;
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
  margin-right: 0.43rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Rating = styled(Rate)`
  font-size: 0.93rem;
  margin-right: 0.4rem;

  color: ${(props) => props.theme.colors.accent};
`;
