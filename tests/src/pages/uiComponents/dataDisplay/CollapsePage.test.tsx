import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import CollapsePage from '../../../../../src/pages/uiComponentsPages/dataDisplay/CollapsePage'; 
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

describe('CollapsePage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders CollapsePage correctly', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <CollapsePage />
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByText('dataDisplay.collapse.basic')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.collapse.accordion')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.collapse.nested')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.collapse.ghost')).toBeInTheDocument();
  })
});
