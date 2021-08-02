import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../../components/common/Card';
import { Slider } from '../../../components/common/Slider';
import { favoriteDoctors } from '../../../constants/favoriteDoctors';
import { DoctorCard } from './DoctorCard';

export const FavoriteDoctorsCard: React.FC = () => {
  return (
    <Card title="Favorite doctors">
      <Slider spaceBetween={24} slidesPerView={3}>
        {favoriteDoctors.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <DoctorCard
              imgUrl={doctor.imgUrl}
              name={doctor.name}
              specifity={doctor.specifity}
              rating={doctor.rating}
              visit={doctor.visit}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Card>
  );
};
