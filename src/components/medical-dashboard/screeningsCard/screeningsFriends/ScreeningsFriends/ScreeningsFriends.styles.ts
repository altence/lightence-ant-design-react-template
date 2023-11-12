import styled, { css } from 'styled-components';
import { dashboardPaddings } from '@app/components/medical-dashboard/DashboardCard/DashboardCard';
import { media, normalizeProp } from '@app/utils/utils';

interface WrapperProps {
  $isOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 0.9375rem;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media only screen and (${media('md')}) {
    padding: 1.25rem;
    margin: ${normalizeProp(dashboardPaddings.md)};
  }

  @media only screen and (${media('xl')}) {
    position: absolute;
    width: 25rem;
    height: 100%;
    margin: 0;
    z-index: 2;
    background-color: rgba(${({ theme }) => theme.rgb.background}, 0.9);

    ${(props) =>
      !props.$isOpen &&
      css`
        width: 5rem;
      `}
  }
`;
