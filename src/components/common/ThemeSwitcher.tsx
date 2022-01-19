import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useThemeSwitcher } from 'react-css-theme-switcher';

interface ThemeSwitcherProps {
  theme: string;
}

const spinnerPath = `${process.env.PUBLIC_URL}/spinners/spinner.svg`;

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, children }) => {
  const { switcher, themes, status } = useThemeSwitcher();
  const [isThemesLoaded, setThemesLoaded] = useState(false);

  useEffect(() => {
    if (!isThemesLoaded && status === 'loaded') {
      setThemesLoaded(true);
    }
  }, [isThemesLoaded, setThemesLoaded, status]);

  useEffect(() => {
    switcher({ theme: theme === 'dark' ? themes.dark : themes.light });
  }, [switcher, theme, themes.dark, themes.light]);

  return (
    <>
      {children}
      <ThemeSwitcherLoading $isShown={!isThemesLoaded && status !== 'loaded'}>
        <img src={spinnerPath} alt="Styles loading..." />
      </ThemeSwitcherLoading>
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
  background-color: ${(props) => props.theme.colors.main.mainBackground};
  z-index: -1;
  transition: opacity 500ms ease;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$isShown &&
    css`
      opacity: 1;
      z-index: 9999;
    `}
`;
