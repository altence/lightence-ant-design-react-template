import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../../components/common/Card/Card';
import { Slider } from '../../../components/common/Slider/Slider';
import { DoctorCard } from './DoctorCard/DoctorCard';
import { doctorsData } from '../../../constants/doctorsData';

export const FavouritesDoctorsCard: React.FC = () => {
  return (
    <Card title="Favorite doctors">
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
