import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import NotificationsPage from '../../../../../src/pages/uiComponentsPages/feedback/NotificationsPage';
import { setupResponsiveMock } from '../../../../../setupTests';

jest.mock('@app/hooks/useFeedback', () => ({
  useFeedback: jest.fn(() => ({
    notification: {
      success: jest.fn(),
      info: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
    },
  })),
}));

describe('NotificationsPage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders buttons with correct text content', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <NotificationsPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    expect(screen.getAllByText('notifications.basicTitle')[0]).toBeInTheDocument();
    expect(screen.getAllByText('notifications.success')[0]).toBeInTheDocument();
    expect(screen.getAllByText('notifications.info')[0]).toBeInTheDocument();
    expect(screen.getAllByText('notifications.warning')[0]).toBeInTheDocument();
    expect(screen.getAllByText('notifications.error')[0]).toBeInTheDocument();
  });

  it('renders cards with correct titles', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <NotificationsPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    expect(screen.getAllByText('notifications.basic')[0]).toBeInTheDocument();
    expect(screen.getAllByText('notifications.types')[0]).toBeInTheDocument();
    expect(screen.getAllByText('notifications.withoutDescription')[0]).toBeInTheDocument();
  });

  it('display notification after click on the button', async () => {
    const { container } = render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <NotificationsPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    await waitFor(() => {
      const basisButton = screen.getAllByRole('button')[0];
      fireEvent.click(basisButton);
    })
  });
});
