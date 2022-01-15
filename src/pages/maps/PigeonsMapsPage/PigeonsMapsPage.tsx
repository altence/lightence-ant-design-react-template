import React from 'react';

import { useTranslation } from 'react-i18next';
import { Draggable, Map } from 'pigeon-maps';
import { stamenTerrain } from 'pigeon-maps/providers';
import pigeon from 'assets/icons/pigeon.svg';

import * as S from '../maps.styles';

const PigeonsMaps: React.FC = () => {
  const { t } = useTranslation();

  const MAP_CENTER: [number, number] = [50.879, 4.6997];

  return (
    <S.MapsCard title={t('common.pigeonMaps')}>
      <Map defaultCenter={MAP_CENTER} defaultZoom={11} provider={stamenTerrain}>
        <Draggable offset={[60, 87]} anchor={MAP_CENTER}>
          <img src={pigeon} alt="Pigeon!" />
        </Draggable>
      </Map>
    </S.MapsCard>
  );
};

export default PigeonsMaps;
