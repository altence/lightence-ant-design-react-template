import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lightColorsTheme } from '../../../../../src/styles/themes/light/lightTheme';
import { HelmetProvider } from 'react-helmet-async';
import PaginationPage from '../../../../../src/pages/uiComponentsPages/dataDisplay/PaginationPage'; 
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

describe('PaginationPage Component', () => {
  beforeEach(() => {
    setupResponsiveMock();
  });

  it('renders PaginationPage correctly', () => {
    render(
      <HelmetProvider>
        <ThemeProvider theme={lightColorsTheme}>
          <PaginationPage />
        </ThemeProvider>
      </HelmetProvider>
    );

    expect(screen.getByText('dataDisplay.pagination.basic')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.pagination.manyPages')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.pagination.pageSize')).toBeInTheDocument();
    expect(screen.getByText('dataDisplay.pagination.disabled')).toBeInTheDocument();
    
    const rightButton = screen.getAllByRole('button', { name: /right/i })[0];
    fireEvent.click(rightButton)

    const secondPage = screen.getAllByRole('listitem', { name: "2"})[0];
    expect(secondPage.classList.contains('ant-pagination-item-active')).toBe(true);
  })
});
