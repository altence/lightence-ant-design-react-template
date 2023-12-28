import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent  } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import ProgressPage from '../../../../../src/pages/uiComponentsPages/feedback/ProgressPage'; 
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

describe('ProgressPage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders ProgressPage correctly', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <ProgressPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    expect(screen.getAllByText('progress.basic')[0]).toBeInTheDocument();
  });
  
  it('increases and decreases percent correctly', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <ProgressPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    const initialPercent = screen.getAllByText('0%')[0];
    const plusButton = screen.getAllByRole('button')[1];
    const minusButton = screen.getAllByRole('button')[0];

    expect(initialPercent).toBeInTheDocument();

    fireEvent.click(plusButton);
  
    const increasedPercent = screen.getAllByText('10%')[0];
    expect(increasedPercent).toBeInTheDocument();

    fireEvent.click(minusButton);
  
    const decreasedPercent = screen.getAllByText('0%')[0];
    expect(decreasedPercent).toBeInTheDocument();
  });
});
