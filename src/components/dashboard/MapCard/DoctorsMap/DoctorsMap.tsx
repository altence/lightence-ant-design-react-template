import React from 'react';
import L, { IconOptions, PointExpression } from 'leaflet';
import { Marker } from 'react-leaflet';

import { ReactComponent as MapBackgroundIcon } from '../../../../assets/icons/map-background.svg';
import { doctorsData } from '../../../../constants/doctorsData';
import { Popup } from '../Popup/Popup';

import * as S from './DoctorsMap.styles';
import { useResponsive } from '../../../../hooks/useResponsive';

const LARGE_MARKER_SIZE: PointExpression = [50, 50];
const MARKER_SIZE: PointExpression = [30, 30];

const defineIconSize = (isDesktop: boolean): PointExpression => {
  return (isDesktop && LARGE_MARKER_SIZE) || MARKER_SIZE;
};

class MarkerDoctor extends L.Icon {
  constructor(props: IconOptions, isDesktop: boolean) {
    const iconSIze = defineIconSize(isDesktop);
    super({
      popupAnchor: iconSIze,
      iconSize: iconSIze,
      ...props,
    });
  }
}

export const DoctorsMap: React.FC = () => {
  const { isDesktop } = useResponsive();

  return (
    <S.DoctorsMap>
      <MapBackgroundIcon />
      {doctorsData.map((marker) => (
        <Marker
          key={marker.id}
          icon={
            new MarkerDoctor(
              {
                iconUrl: marker.imgUrl,
                iconRetinaUrl: marker.imgUrl,
              },
              isDesktop,
            )
          }
          position={[marker.gps.latitude, marker.gps.longitude]}
        >
          <Popup imgUrl={marker.imgUrl} name={marker.name} specifity={marker.specifity} rating={marker.rating} />
        </Marker>
      ))}
    </S.DoctorsMap>
  );
};
