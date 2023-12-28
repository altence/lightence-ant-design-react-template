import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent  } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import ResultsPage from '../../../../../src/pages/uiComponentsPages/feedback/ResultsPage'; 
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

describe('ResultsPage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders ResultsPage correctly', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <ResultsPage />
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByText('results.warning')).toBeInTheDocument();
    expect(screen.getByText('results.error')).toBeInTheDocument();
  })

  it('clicking "Go to Console" button triggers the expected action', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <ResultsPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    const firstConsoleButton = screen.getAllByText('results.goConsole')[0];
    expect(firstConsoleButton).toBeInTheDocument();
  
    fireEvent.click(firstConsoleButton);
  });
});
