import type { DropdownProps } from 'antd';
import * as S from './BaseDropdown.styles';

export const BaseDropdown: React.FC<DropdownProps> = ({ children, ...props }) => {
  return (
    <S.Dropdown getPopupContainer={(triggerNode) => triggerNode} {...props}>
      {children}
    </S.Dropdown>
  );
};
