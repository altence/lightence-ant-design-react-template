import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent  } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import AlertsPage from '../../../../../src/pages/uiComponentsPages/feedback/AlertsPage'; 
import { setupResponsiveMock } from '../../../../../setupTests';

jest.mock('@app/utils/utils', () => {
  const originalModule = jest.requireActual('@app/utils/utils');
  return {
    ...originalModule,
    useMediaQuery: jest.fn(),
    media: jest.fn(() => ({ theme }: { theme: DefaultTheme }) => `(${theme})`),
    mediaMax: jest.fn(() => ({ theme }: { theme: DefaultTheme }) => `(${theme})`),
    mediaRange: jest.fn(() => ({ theme }: { theme: DefaultTheme }) => `(${theme})`),
    hexToRGB: jest.fn(),
    shadeColor: jest.fn(),
  };
});

describe('AlertsPage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders success, warning, and error alerts correctly', () => {
    const { container } = render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <AlertsPage />
        </ThemeProvider>
      </HelmetProvider>
    );
    
    const successAlerts = screen.getAllByText('alerts.success');
    const warningAlerts = screen.getAllByText('alerts.warning');
    const errorAlerts = screen.getAllByText('alerts.error');

    expect(successAlerts).toHaveLength(5);
    expect(warningAlerts).toHaveLength(5);
    expect(errorAlerts).toHaveLength(5);
  });

  it('renders elements with test id', () => {
    const { container } = render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <AlertsPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    const desktopLayoutElement = screen.getByTestId('alerts-types-card');
    expect(desktopLayoutElement).toBeInTheDocument();
  });

  it('closes an alert when close button is clicked', () => {
    const { container } = render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <AlertsPage />
        </ThemeProvider>
      </HelmetProvider>
    );

    const allCloseButtons = screen.getAllByRole('img');
    const closeButton = allCloseButtons[0];

    const initialAlerts = screen.getAllByRole('alert');
    expect(initialAlerts).toHaveLength(19);

    fireEvent.click(closeButton);

    const updatedAlerts = screen.getAllByRole('alert');
    expect(updatedAlerts).toHaveLength(18);
  });
});
