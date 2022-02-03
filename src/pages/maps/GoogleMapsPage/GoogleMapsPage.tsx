import React from 'react';

import GoogleMapReact from 'google-map-react';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/maps/maps.styles';

const GoogleMaps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.googleMap')}</PageTitle>
      <S.MapsCard title={t('common.googleMap')}>
        <GoogleMapReact
          defaultCenter={{
            lat: 59.333772,
            lng: 18.0644457,
          }}
          defaultZoom={6}
        />
      </S.MapsCard>
    </>
  );
};

export default GoogleMaps;
