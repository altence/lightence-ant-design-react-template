import type { PopoverProps } from 'antd';
import * as S from './BasePopover.styles';

export type BasePopoverProps = PopoverProps;

export const BasePopover: React.FC<BasePopoverProps> = (props) => {
  return <S.Popover {...props} />;
};
