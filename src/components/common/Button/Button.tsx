import React from 'react';
import { Button as AntButton } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface ButtonProps {
  className: string;
  icon: React.FC;
}

export const Button: React.FC<ButtonProps> = ({ className, icon, children, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <AntButton size={(isTablet && 'large') || 'middle'} className={className} icon={icon} {...props}>
      {children}
    </AntButton>
  );
};
