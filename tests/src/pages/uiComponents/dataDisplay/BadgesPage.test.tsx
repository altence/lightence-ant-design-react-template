import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent  } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import BadgesPage from '../../../../../src/pages/uiComponentsPages/dataDisplay/BadgesPage'; 
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

describe('BadgesPage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders BadgesPage correctly', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <BadgesPage />
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByText('dataDisplay.badges.sizes')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.badges.overflow')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.badges.status')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.badges.ribbon')).toBeInTheDocument();
  })
});
