import { Doctor, getDoctorsData } from 'api/doctors.api';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/common/Card/Card';
import { Carousel } from '../../common/Carousel/Carousel';
import { DoctorCard } from './DoctorCard/DoctorCard';

export const FavouritesDoctorsCard: React.FC = () => {
  const { t } = useTranslation();
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  return (
    <Card id="fav-doctors" title={t('dashboard.favoriteDoctors.title')}>
      <Carousel slidesToShow={3}>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            imgUrl={doctor.imgUrl}
            name={doctor.name}
            specifity={doctor.specifity}
            rating={doctor.rating}
          />
        ))}
      </Carousel>
    </Card>
  );
};
