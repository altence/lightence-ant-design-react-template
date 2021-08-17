import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../../../components/common/Card/Card';
import { Slider } from '../../../components/common/Slider/Slider';
import { DoctorCard } from './DoctorCard/DoctorCard';
import { doctorsData } from '../../../constants/doctorsData';
import { media } from '../../../styles/theme';

export const FavouritesDoctorsCard: React.FC = () => {
  const isBigScreen = useMediaQuery({ query: media.xxl });

  return (
    <Card title="Favorite doctors" padding={(isBigScreen && '1rem') || '0.625rem'}>
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
