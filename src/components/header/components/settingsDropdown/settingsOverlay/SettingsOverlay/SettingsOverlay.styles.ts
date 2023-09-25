import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import styled from 'styled-components';

export const SettingsOverlayMenu = styled.div`
  width: 13rem;
`;

export const RadioBtn = styled(BaseRadio)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const PwaInstallWrapper = styled.div`
  padding: 0 1rem 0.75rem;
`;
