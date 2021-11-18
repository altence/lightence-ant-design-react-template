import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/common/Card/Card';
import { Carousel } from '../../common/Carousel/Carousel';
import { DoctorCard } from './DoctorCard/DoctorCard';
import { doctorsData } from '../../../constants/doctorsData';

export const FavouritesDoctorsCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card id="fav-doctors" title={t('dashboard.favoriteDoctors.title')}>
      <Carousel
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          500: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
        }}
      >
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
      </Carousel>
    </Card>
  );
};
