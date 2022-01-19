import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useThemeSwitcher } from 'react-css-theme-switcher';

interface ThemeSwitcherProps {
  theme: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, children }) => {
  const { switcher, themes, status } = useThemeSwitcher();

  useEffect(() => {
    switcher({ theme: theme === 'dark' ? themes.dark : themes.light });
  }, [switcher, theme, themes.dark, themes.light]);

  return (
    <>
      {children}
      <ThemeSwitcherLoading $isShown={status !== 'loaded'}>LOADING</ThemeSwitcherLoading>
    </>
  );
};

interface ThemeSwitcherLoadingProps {
  $isShown: boolean;
}

const ThemeSwitcherLoading = styled.div<ThemeSwitcherLoadingProps>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: green;
  z-index: -1;
  transition: opacity 500ms ease;
  opacity: 0;

  ${(props) =>
    props.$isShown &&
    css`
      opacity: 1;
      z-index: 9999;
    `}
`;
