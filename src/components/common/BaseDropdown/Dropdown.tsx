import React from 'react';
import { DropdownProps, Dropdown } from 'antd';

export const BaseDropdown: React.FC<DropdownProps> = ({ children, ...props }) => {
  return (
    <Dropdown getPopupContainer={(triggerNode) => triggerNode} {...props}>
      {children}
    </Dropdown>
  );
};
