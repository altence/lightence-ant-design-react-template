import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Doctor, getDoctorsData } from 'api/doctors.api';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { Carousel } from 'components/common/Carousel/Carousel';
import { DoctorCard } from './DoctorCard/DoctorCard';
import styled, { ThemeContext } from 'styled-components';
import { CalendarEvent, getUserCalendar } from 'api/calendar.api';
import { getUser, User } from 'api/users.api';
import { Dates } from 'constants/Dates';

export const FavouritesDoctorsCard: React.FC = () => {
  const { t } = useTranslation();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [user, setUser] = useState<User>();
  const [calendar, setCalendar] = useState<CalendarEvent[]>([]);

  const theme = useContext(ThemeContext);
  const today = Dates.getToday();

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);

  useEffect(() => {
    user && getUserCalendar(user.id).then((res) => setCalendar(res));
  }, [user]);

  const pastEvents = useMemo(
    () => calendar.filter((event) => Dates.getDate(event.date).isBefore(today)),
    [calendar, today],
  );

  return (
    <DashboardCard title={t('dashboard.favoriteDoctors.title')} padding="0 20px">
      {doctors.length > 0 && calendar.length > 0 && (
        <CarouselWrapper>
          <Carousel
            slidesToShow={5}
            responsive={[
              {
                breakpoint: theme.breakpoints.xxl - 1,
                settings: {
                  slidesToShow: 4,
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
              {
                breakpoint: theme.breakpoints.sm - 1,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {pastEvents.map((event) => {
              const currentDoctor = doctors.find((doctor) => doctor.id === event.doctor);

              return (
                <div key={currentDoctor?.id}>
                  <DoctorCard
                    imgUrl={currentDoctor?.imgUrl}
                    name={currentDoctor?.name}
                    speciality={currentDoctor?.specifity}
                    rating={currentDoctor?.rating}
                    date={event.date}
                  />
                </div>
              );
            })}
          </Carousel>
        </CarouselWrapper>
      )}
    </DashboardCard>
  );
};

const CarouselWrapper = styled.div`
  margin-left: -1.25rem;
  margin-right: -1.25rem;
`;
