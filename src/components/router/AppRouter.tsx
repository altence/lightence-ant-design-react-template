import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// no lazy loading for auth pages to avoid flickering
const AuthLayout = React.lazy(() => import('@app/components/layouts/auth/AuthLayout'));
import LoginPage from '@app/pages/LoginPage';
import SignUpPage from '@app/pages/SignUpPage';
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage';
import SecurityCodePage from '@app/pages/SecurityCodePage';
import NewPasswordPage from '@app/pages/NewPasswordPage';
import LockPage from '@app/pages/LockPage';

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import ProfileLayout from '@app/components/layouts/profile/ProfileLayout';
import RequireAuth from '@app/components/router/RequireAuth';

const DashboardPage = React.lazy(() => import('@app/pages/DashboardPage/DashboardPage'));
const NewsFeedPage = React.lazy(() => import('@app/pages/NewsFeedPage'));
const KanbanPage = React.lazy(() => import('@app/pages/KanbanPage'));
const DataTablesPage = React.lazy(() => import('@app/pages/DataTablesPage'));
const ChartsPage = React.lazy(() => import('@app/pages/ChartsPage'));
const ServerErrorPage = React.lazy(() => import('@app/pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('@app/pages/Error404Page'));
const AdvancedFormsPage = React.lazy(() => import('@app/pages/AdvancedFormsPage'));
const PersonalInfoPage = React.lazy(() => import('@app/pages/PersonalInfoPage'));
const SecuritySettingsPage = React.lazy(() => import('@app/pages/SecuritySettingsPage'));
const NotificationsPage = React.lazy(() => import('@app/pages/NotificationsPage'));
const PaymentsPage = React.lazy(() => import('@app/pages/PaymentsPage'));
const ButtonsPage = React.lazy(() => import('@app/pages/UIComponentsPages/ButtonsPage'));
const SpinnersPage = React.lazy(() => import('@app/pages/UIComponentsPages/SpinnersPage'));
const AvatarsPage = React.lazy(() => import('@app/pages/UIComponentsPages/DataDisplay/AvatarsPage'));
const BadgesPage = React.lazy(() => import('@app/pages/UIComponentsPages/DataDisplay/BadgesPage'));
const CollapsePage = React.lazy(() => import('@app/pages/UIComponentsPages/DataDisplay/CollapsePage'));
const PaginationPage = React.lazy(() => import('@app/pages/UIComponentsPages/DataDisplay/PaginationPage'));
const ModalsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Modals/ModalsPage'));
const PopoversPage = React.lazy(() => import('@app/pages/UIComponentsPages/Modals/PopoversPage'));
const PopconfirmsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Modals/PopconfirmsPage'));
const ProgressPage = React.lazy(() => import('@app/pages/UIComponentsPages/Feedback/ProgressPage'));
const ResultsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Feedback/ResultsPage'));
const AlertsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Feedback/AlertsPage'));
const SkeletonsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Feedback/SkeletonsPage'));
const InputsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/InputsPage'));
const CheckboxesPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/CheckboxesPage'));
const RadiosPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/RadiosPage'));
const SelectsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/SelectsPage'));
const SwitchesPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/SwitchesPage'));
const UploadsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/UploadsPage'));
const RatesPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/RatesPage'));
const AutoCompletesPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/AutoCompletesPage'));
const StepsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/StepsPage'));
const DateTimePickersPage = React.lazy(() => import('@app/pages/UIComponentsPages/Forms/DateTimePickersPage'));
const DropdownsPage = React.lazy(() => import('@app/pages/UIComponentsPages/DropdownsPage'));
const BreadcrumbsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Navigation/BreadcrumbsPage'));
const TabsPage = React.lazy(() => import('@app/pages/UIComponentsPages/Navigation/TabsPage'));
const NotificationsUIPage = React.lazy(() => import('@app/pages/UIComponentsPages/Feedback/NotificationsPage'));
const GoogleMaps = React.lazy(() => import('@app/pages/maps/GoogleMapsPage/GoogleMapsPage'));
const LeafletMaps = React.lazy(() => import('@app/pages/maps/LeafletMapsPage/LeafletMapsPage'));
const ReactSimpleMaps = React.lazy(() => import('@app/pages/maps/ReactSimpleMapsPage/ReactSimpleMapsPage'));
const PigeonsMaps = React.lazy(() => import('@app/pages/maps/PigeonsMapsPage/PigeonsMapsPage'));
const Logout = React.lazy(() => import('./Logout'));

export const DASHBOARD_PATH = '/';

const Dashboard = withFallback(DashboardPage);
const NewsFeed = withFallback(NewsFeedPage);
const Kanban = withFallback(KanbanPage);
const AdvancedForm = withFallback(AdvancedFormsPage);

// UI Components
const Buttons = withFallback(ButtonsPage);
const Spinners = withFallback(SpinnersPage);
const Inputs = withFallback(InputsPage);
const Checkboxes = withFallback(CheckboxesPage);
const Radios = withFallback(RadiosPage);
const Selects = withFallback(SelectsPage);
const Switches = withFallback(SwitchesPage);
const Uploads = withFallback(UploadsPage);
const Rates = withFallback(RatesPage);
const AutoCompletes = withFallback(AutoCompletesPage);
const Steps = withFallback(StepsPage);
const DateTimePickers = withFallback(DateTimePickersPage);
const Dropdowns = withFallback(DropdownsPage);
const Breadcrumbs = withFallback(BreadcrumbsPage);
const Tabs = withFallback(TabsPage);
const Avatars = withFallback(AvatarsPage);
const Badges = withFallback(BadgesPage);
const Collapse = withFallback(CollapsePage);
const Pagination = withFallback(PaginationPage);
const Modals = withFallback(ModalsPage);
const Popovers = withFallback(PopoversPage);
const Popconfirms = withFallback(PopconfirmsPage);
const Progress = withFallback(ProgressPage);
const Results = withFallback(ResultsPage);
const Alerts = withFallback(AlertsPage);
const NotificationsUI = withFallback(NotificationsUIPage);
const Skeletons = withFallback(SkeletonsPage);

const DataTables = withFallback(DataTablesPage);
const Charts = withFallback(ChartsPage);

// Maps
const Google = withFallback(GoogleMaps);
const Leaflet = withFallback(LeafletMaps);
const ReactSimple = withFallback(ReactSimpleMaps);
const Pigeons = withFallback(PigeonsMaps);

const ServerError = withFallback(ServerErrorPage);
const Error404 = withFallback(Error404Page);

// Profile
const PersonalInfo = withFallback(PersonalInfoPage);
const SecuritySettings = withFallback(SecuritySettingsPage);
const Notifications = withFallback(NotificationsPage);
const Payments = withFallback(PaymentsPage);

const AuthLayoutFallback = withFallback(AuthLayout);
const LogoutFallback = withFallback(Logout);

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<Dashboard />} />
          <Route path="apps">
            <Route path="feed" element={<NewsFeed />} />
            <Route path="kanban" element={<Kanban />} />
          </Route>
          <Route path="forms">
            <Route path="advanced-forms" element={<AdvancedForm />} />
          </Route>
          <Route path="data-tables" element={<DataTables />} />
          <Route path="charts" element={<Charts />} />
          <Route path="maps">
            <Route path="google-maps" element={<Google />} />
            <Route path="leaflet-maps" element={<Leaflet />} />
            <Route path="react-simple-maps" element={<ReactSimple />} />
            <Route path="pigeon-maps" element={<Pigeons />} />
          </Route>
          <Route path="server-error" element={<ServerError />} />
          <Route path="404" element={<Error404 />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="security-settings" element={<SecuritySettings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="payments" element={<Payments />} />
          </Route>
          <Route path="ui-components">
            <Route path="buttons" element={<Buttons />} />
            <Route path="spinners" element={<Spinners />} />
            <Route path="inputs" element={<Inputs />} />
            <Route path="checkboxes" element={<Checkboxes />} />
            <Route path="radios" element={<Radios />} />
            <Route path="selects" element={<Selects />} />
            <Route path="switches" element={<Switches />} />
            <Route path="uploads" element={<Uploads />} />
            <Route path="rates" element={<Rates />} />
            <Route path="auto-completes" element={<AutoCompletes />} />
            <Route path="steps" element={<Steps />} />
            <Route path="date-time-pickers" element={<DateTimePickers />} />
            <Route path="dropdowns" element={<Dropdowns />} />
            <Route path="breadcrumbs" element={<Breadcrumbs />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="avatars" element={<Avatars />} />
            <Route path="badges" element={<Badges />} />
            <Route path="collapse" element={<Collapse />} />
            <Route path="pagination" element={<Pagination />} />
            <Route path="modals" element={<Modals />} />
            <Route path="popovers" element={<Popovers />} />
            <Route path="popconfirms" element={<Popconfirms />} />
            <Route path="progress" element={<Progress />} />
            <Route path="results" element={<Results />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="notifications" element={<NotificationsUI />} />
            <Route path="skeletons" element={<Skeletons />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route
            path="lock"
            element={
              <RequireAuth>
                <LockPage />
              </RequireAuth>
            }
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="security-code" element={<SecurityCodePage />} />
          <Route path="new-password" element={<NewPasswordPage />} />
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  );
};

function withFallback<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<div style={{ color: 'yellow' }}>LOADING</div>}>
      <Component {...props} />
    </Suspense>
  );
}
