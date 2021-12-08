import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '@app/pages/DashboardPage';
import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import AuthLayout from '@app/components/layouts/auth/AuthLayout';
import LoginPage from '@app/pages/LoginPage';
import NewsFeedPage from '@app/pages/NewsFeedPage';
import KanbanPage from '@app/pages/KanbanPage';
import PaymentPage from '@app/pages/PaymentPage';
import InputCodePage from '@app/pages/InputCodePage';
import DataTablesPage from '@app/pages/DataTablesPage';
import ChartsPage from '@app/pages/ChartsPage';
import MapsPage from '@app/pages/MapsPage';
import ServerErrorPage from '@app/pages/ServerErrorPage';
import MaintenancePage from '@app/pages/MaintenancePage';
import SignUpPage from '@app/pages/SignUpPage';
import LockPage from '@app/pages/LockPage';
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage';
import Error404Page from '@app/pages/Error404Page';
import SecurityCodePage from '@app/pages/SecurityCodePage';
import NewPasswordPage from '@app/pages/NewPasswordPage';
import AdvancedFormsPage from '@app/pages/AdvancedFormsPage';
import PersonalInfoPage from '@app/pages/PersonalInfoPage';
import SecuritySettingsPage from '@app/pages/SecuritySettingsPage';
import NotificationsPage from '@app/pages/NotificationsPage';
import PaymentsPage from '@app/pages/PaymentsPage';
import ProfileLayout from '@app/components/layouts/profile/ProfileLayout';
import ButtonsPage from '@app/pages/UIComponentsPages/ButtonsPage';
import SpinnersPage from '@app/pages/UIComponentsPages/SpinnersPage';
import AvatarsPage from '@app/pages/UIComponentsPages/DataDisplay/AvatarsPage';
import BadgesPage from '@app/pages/UIComponentsPages/DataDisplay/BadgesPage';
import CollapsePage from '@app/pages/UIComponentsPages/DataDisplay/CollapsePage';
import PaginationPage from 'pages/UIComponentsPages/DataDisplay/PaginationPage';

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
            <Route path="advanced-forms" element={<AdvancedFormsPage />} />
          </Route>
          <Route path="ui-components">
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="spinners" element={<SpinnersPage />} />
            <Route path="avatars" element={<AvatarsPage />} />
            <Route path="badges" element={<BadgesPage />} />
            <Route path="collapse" element={<CollapsePage />} />
            <Route path="pagination" element={<PaginationPage />} />
          </Route>
          <Route path="data-tables" element={<DataTablesPage />} />
          <Route path="charts" element={<ChartsPage />} />
          <Route path="maps" element={<MapsPage />} />
          <Route path="server-error" element={<ServerErrorPage />} />
          <Route path="maintenance" element={<MaintenancePage />} />
          <Route path="404" element={<Error404Page />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="personal-info" element={<PersonalInfoPage />} />
            <Route path="security-settings" element={<SecuritySettingsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="lock" element={<LockPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="security-code" element={<SecurityCodePage />} />
          <Route path="new-password" element={<NewPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
