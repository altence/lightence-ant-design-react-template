import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { Card } from 'antd';
import { CovidChartCard } from './CovidChart/CovidChartCard';
import { ActivityChartCard } from './ActivityChart/ActivityChartCard';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <Card>SOME COMPONENT</Card>
      <CovidChartCard />
      <ActivityChartCard />
    </MainLayout>
  );
};

export default Dashboard;
