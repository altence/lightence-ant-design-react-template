import React from 'react';
import { Error } from '../components/Error/Error';
import MainLayout from '../components/layouts/MainLayout';
import error404 from '../assets/images/error404.svg';

const Error404: React.FC = () => {
  return (
    <MainLayout>
      <Error img={error404} msg="Sorry, page not found!" />
    </MainLayout>
  );
};

export default Error404;
