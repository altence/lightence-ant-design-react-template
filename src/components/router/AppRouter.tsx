import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '../../pages/DashboardPage';
import MainLayout from '../layouts/main/MainLayout/MainLayout';
import ProfilePage from '../../pages/ProfilePage';
import AuthLayout from '../layouts/auth/AuthLayout';
import LoginPage from '../../pages/LoginPage';
import NewsFeedPage from '../../pages/NewsFeedPage';
import KanbanPage from '../../pages/KanbanPage';
import PaymentPage from '../../pages/PaymentPage';
import InputCodePage from '../../pages/InputCodePage';
import DataTablesPage from '../../pages/DataTablesPage';
import ChartsPage from '../../pages/ChartsPage';
import MapsPage from '../../pages/MapsPage';
import ServerErrorPage from '../../pages/ServerErrorPage';
import MaintenancePage from '../../pages/MaintenancePage';
import SignUpPage from '../../pages/SignUpPage';
import LockPage from '../../pages/LockPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import Error404Page from '../../pages/Error404Page';
import VerifyEmailPage from '../../pages/VerifyEmailPage';
import NewPasswordPage from '../../pages/NewPasswordPage';

/*TODO check for lazy loading and add if lack*/
export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="apps">
            <Route path="feed" element={<NewsFeedPage />} />
            <Route path="kanban" element={<KanbanPage />} />
          </Route>

          <Route path="forms">
            <Route path="payment" element={<PaymentPage />} />
            <Route path="security-code" element={<InputCodePage />} />
          </Route>
          <Route path="data-tables" element={<DataTablesPage />} />
          <Route path="charts" element={<ChartsPage />} />
          <Route path="maps" element={<MapsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="server-error" element={<ServerErrorPage />} />
          <Route path="maintenance" element={<MaintenancePage />} />
          <Route path="404" element={<Error404Page />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="lock" element={<LockPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="verify-email" element={<VerifyEmailPage />} />
          <Route path="new-password" element={<NewPasswordPage />} />
          <Route path="lock" element={<LockPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
