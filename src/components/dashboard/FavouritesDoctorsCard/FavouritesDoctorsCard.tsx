import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/common/Card/Card';
import { Slider } from '../../../components/common/Slider/Slider';
import { DoctorCard } from './DoctorCard/DoctorCard';
import { doctorsData } from '../../../constants/doctorsData';

export const FavouritesDoctorsCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card id="fav-doctors" title={t('dashboard.favoriteDoctors.title')}>
      <Slider>
        {doctorsData.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <DoctorCard
              imgUrl={doctor.imgUrl}
              name={doctor.name}
              specifity={doctor.specifity}
              rating={doctor.rating}
              lastVisit={doctor.lastVisit}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Card>
  );
};
