import React from 'react';
import { Error } from '../components/Error/Error';
import MainLayout from '../components/layouts/MainLayout';
import error500 from '../assets/images/error500.svg';

const Error404: React.FC = () => {
  return (
    <MainLayout>
      <Error img={error500} msg="Internal server error" btnText="Try again" />
    </MainLayout>
  );
};

export default Error404;
