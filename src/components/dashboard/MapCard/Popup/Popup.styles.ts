import styled from 'styled-components';
import { Typography, Avatar as AntAvatar, Rate } from 'antd';
import { Popup as LPopup } from 'react-leaflet';

export const Wrapper = styled(LPopup)`
  font-size: 0.625rem;

  & .leaflet-popup-content-wrapper {
    border-radius: ${(props) => props.theme.border.radius};
  }

  & .leaflet-popup-content {
    display: flex;
    align-items: center;
    margin: 0.375rem 0.5rem;
    width: unset;
  }

  & .leaflet-popup-close-button {
    display: none;
  }
`;

export const Avatar = styled(AntAvatar)`
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 2.5rem;
  height: 100%;
  margin-right: 0.625rem;
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
  margin-bottom: 0.25rem;

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export const Title = styled(Typography.Text)`
  margin-right: 0.625rem;

  color: ${(props) => props.theme.colors.primary};
`;

export const Rating = styled(Rate)`
  font-size: 0.75rem;
  margin-right: 0.375rem;

  color: ${(props) => props.theme.colors.accent};
`;
