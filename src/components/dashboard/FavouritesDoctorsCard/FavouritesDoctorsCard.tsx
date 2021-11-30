import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor, getDoctorsData, History, getDoctorsHistory } from 'api/doctors.api';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { Carousel } from 'components/common/Carousel/Carousel';
import { DoctorCard } from './DoctorCard/DoctorCard';
import { ThemeContext } from 'styled-components';

export const FavouritesDoctorsCard: React.FC = () => {
  const { t } = useTranslation();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [history, setHistory] = useState<History[]>([]);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  useEffect(() => {
    getDoctorsHistory().then((res) => setHistory(res));
  }, []);

  return (
    <DashboardCard id="fav-doctors" title={t('dashboard.favoriteDoctors.title')}>
      {doctors.length > 0 && history.length > 0 && (
        <Carousel
          slidesToShow={6}
          responsive={[
            {
              breakpoint: theme.breakpoints.xxl - 1,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: theme.breakpoints.xl - 1,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: theme.breakpoints.md - 1,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {history.map((history) => {
            const currentDoctor = doctors.find((doctor) => doctor.id === history.doctor);

            return (
              <div key={currentDoctor?.id}>
                <DoctorCard
                  imgUrl={currentDoctor?.imgUrl}
                  name={currentDoctor?.name}
                  speciality={currentDoctor?.specifity}
                  rating={currentDoctor?.rating}
                  date={history.date}
                />
              </div>
            );
          })}
        </Carousel>
      )}
    </DashboardCard>
  );
};
