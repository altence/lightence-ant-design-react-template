import { ReactNode } from 'react';

export interface LayoutProps {
  siderContent: (toggleSider: () => void) => ReactNode;
}
