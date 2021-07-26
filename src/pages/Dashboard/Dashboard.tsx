import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { Card } from 'antd';
import { CovidChartCard } from './CovidChart/CovidChartCard';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <Card>SOME COMPONENT</Card>
      <CovidChartCard />
    </MainLayout>
  );
};

export default Dashboard;
