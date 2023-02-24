import React from 'react';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/maps/maps.styles';

const GoogleMaps: React.FC = () => {
  const { t } = useTranslation();

  const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey: '' });

  if (loadError) {
    return <>{loadError.message}</>;
  }

  return (
    <>
      <PageTitle>{t('common.googleMap')}</PageTitle>
      <S.MapsCard title={t('common.googleMap')}>
        {isLoaded ? (
          <GoogleMap
            center={{
              lat: 59.333772,
              lng: 18.0644457,
            }}
            zoom={6}
            mapContainerStyle={{ height: '100%', width: '100%' }}
          />
        ) : (
          <></>
        )}
      </S.MapsCard>
    </>
  );
};

export default GoogleMaps;
