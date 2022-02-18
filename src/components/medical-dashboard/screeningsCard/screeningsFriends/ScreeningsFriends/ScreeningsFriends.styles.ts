import styled, { css } from 'styled-components';
import { dashboardPaddings } from '@app/components/medical-dashboard/DashboardCard/DashboardCard';
import { media } from '@app/styles/themes/constants';

interface WrapperProps {
  $isVisible: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 0.9375rem;
  transition: all 0.3s ease;

  background-color: var(--background-color);

  box-shadow: var(--box-shadow);

  @media only screen and ${media.md} {
    padding: 1.25rem;

    margin: ${dashboardPaddings.md[0]}px ${dashboardPaddings.md[1]}px;
  }

  @media only screen and ${media.xl} {
    position: absolute;
    width: 25rem;
    height: 100%;
    margin: 0;
    z-index: 2;

    background-color: rgba(var(--background-rgb-color), 0.9);

    ${(props) =>
      !props.$isVisible &&
      css`
        width: 5rem;
      `}
  }
`;
