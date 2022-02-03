import React from 'react';

import { useTranslation } from 'react-i18next';
import { Draggable, Map } from 'pigeon-maps';
import { stamenTerrain } from 'pigeon-maps/providers';

import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import pigeon from '@app/assets/icons/pigeon.svg';
import * as S from '@app/pages/maps/maps.styles';

const PigeonsMaps: React.FC = () => {
  const { t } = useTranslation();

  const MAP_CENTER: [number, number] = [50.879, 4.6997];

  return (
    <>
      <PageTitle>{t('common.pigeonMaps')}</PageTitle>
      <S.MapsCard title={t('common.pigeonMaps')}>
        <Map defaultCenter={MAP_CENTER} defaultZoom={11} provider={stamenTerrain}>
          <Draggable offset={[60, 87]} anchor={MAP_CENTER}>
            <img src={pigeon} alt="Pigeon!" />
          </Draggable>
        </Map>
      </S.MapsCard>
    </>
  );
};

export default PigeonsMaps;
