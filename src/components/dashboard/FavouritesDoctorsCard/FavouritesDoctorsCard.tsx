import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../../components/common/Card/Card';
import { Slider } from '../../../components/common/Slider/Slider';
import { favoriteDoctors } from '../../../constants/favouritesDoctors';
import { DoctorCard } from './DoctorCard/DoctorCard';

export const FavouritesDoctorsCard: React.FC = () => {
  return (
    <Card title="Favorite doctors" padding="0.75rem 3rem">
      <Slider>
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
