import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { ProfileCard } from '../components/profile/ProfileCard/ProfileCard';

const Profile: React.FC = () => {
  return (
    <MainLayout>
      <ProfileCard />
    </MainLayout>
  );
};

export default Profile;
