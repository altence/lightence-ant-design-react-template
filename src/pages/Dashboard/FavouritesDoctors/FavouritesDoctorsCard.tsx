import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../../components/common/Card/Card';
import { Slider } from '../../../components/common/Slider/Slider';
import { favoriteDoctors } from '../../../constants/favouritesDoctors';
import { Doctor } from './Dcotor/Doctor';

export const FavouritesDoctorsCard: React.FC = () => {
  return (
    <Card title="Favorite doctors" padding="0.8rem 1.25rem">
      <Slider>
        {favoriteDoctors.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <Doctor
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
