import React from 'react';

import { useTranslation } from 'react-i18next';

import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/maps/maps.styles';

const LeafletMaps: React.FC = () => {
  const { t } = useTranslation();
  const MAP_CENTER: LatLngExpression = [59.333772, 18.0644457];

  return (
    <>
      <PageTitle>{t('common.leafletMap')}</PageTitle>
      <S.MapsCard title={t('common.leafletMap')}>
        <MapContainer
          center={MAP_CENTER}
          zoom={6}
          zoomControl={false}
          minZoom={1}
          maxZoom={10}
          style={{ height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </S.MapsCard>
    </>
  );
};

export default LeafletMaps;
