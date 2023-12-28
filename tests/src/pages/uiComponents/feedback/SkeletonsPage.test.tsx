import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent  } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import SkeletonsPage from '../../../../../src/pages/uiComponentsPages/feedback/SkeletonsPage'; 
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

describe('SkeletonsPage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders SkeletonsPage correctly', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <SkeletonsPage />
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByText('skeletons.basic')).toBeInTheDocument();
    expect(screen.getByText('skeletons.complex')).toBeInTheDocument();
  })

  it('changing "Active" switch triggers the expected action', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <SkeletonsPage />
        </ThemeProvider>
      </HelmetProvider>
    );
  
    const squareButton = screen.getByText('skeletons.square')
    fireEvent.click(squareButton);
  });
});
