import styled, { css } from 'styled-components';
import { dashboardPaddings } from 'components/dashboard/DashboardCard/DashboardCard';
import { hexToRGB } from 'utils/utils';

interface WrapperProps {
  $isVisible: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 0.9375rem;
  transition: all 0.3s ease;

  background-color: ${(props) => props.theme.colors.main.mainBackground};

  box-shadow: ${(props) => props.theme.boxShadow.main};

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1.25rem;

    margin: ${dashboardPaddings.md[0]}px ${dashboardPaddings.md[1]}px;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    position: absolute;
    width: 25rem;
    height: 100%;
    margin: 0;
    z-index: 2;

    background-color: ${(props) => hexToRGB(props.theme.colors.main.mainBackground, 0.9)};

    ${(props) =>
      !props.$isVisible &&
      css`
        width: 5rem;
      `}
  }
`;
