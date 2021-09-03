import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { NewsFeed } from '../components/NewsFeed/NewsFeed';

const NewsFeedPage: React.FC = () => {
  return (
    <MainLayout>
      <NewsFeed />
    </MainLayout>
  );
};

export default NewsFeedPage;
