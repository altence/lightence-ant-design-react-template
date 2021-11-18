import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/common/Card/Card';
import { Carousel } from '../../common/Carousel/Carousel';
import { DoctorCard } from './DoctorCard/DoctorCard';
import { doctorsData } from '../../../constants/doctorsData';

export const FavouritesDoctorsCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card id="fav-doctors" title={t('dashboard.favoriteDoctors.title')}>
      <Carousel slidesToShow={3}>
        {doctorsData.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            imgUrl={doctor.imgUrl}
            name={doctor.name}
            specifity={doctor.specifity}
            rating={doctor.rating}
            lastVisit={doctor.lastVisit}
          />
        ))}
      </Carousel>
    </Card>
  );
};
