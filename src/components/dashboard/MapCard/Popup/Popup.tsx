import React, { useMemo } from 'react';
import { Typography } from 'antd';
import * as S from './Popup.styles';
import { useTranslation } from 'react-i18next';
import { specifities } from '../../../../constants/specifities';

const { Text } = Typography;

interface PopupProps {
  isDoctor?: boolean;
  imgUrl?: string;
  name?: string;
  specifity?: number;
  rating?: number;
}

export const Popup: React.FC<PopupProps> = ({ isDoctor, imgUrl, name, specifity, rating = 5 }) => {
  const { t } = useTranslation();

  const speciality = useMemo(() => {
    let result;

    specifities.forEach((spec) => {
      if (spec.id === specifity) {
        result = spec.name;
      }
    });

    return result;
  }, [specifities, specifity]);

  return (
    <S.Wrapper>
      {!isDoctor && <Text>{`${t('dashboard.map.polyclinic')} ${name}`}</Text>}
      {isDoctor && (
        <>
          <S.Avatar shape="square" src={imgUrl} />
          <S.InfoWrapper>
            <S.Item>
              <S.Title>{t('common.doctor')}</S.Title>
              <Text>{name}</Text>
            </S.Item>
            <S.Item>
              <S.Title>{t('common.specifity')}</S.Title>
              <Text>{speciality && t(speciality)}</Text>
            </S.Item>
            <S.Item>
              <S.Rating disabled defaultValue={rating} />
              <Text>{rating}</Text>
            </S.Item>
          </S.InfoWrapper>
        </>
      )}
    </S.Wrapper>
  );
};
