import React, { ComponentProps } from 'react';
import { Select as AntSelect } from 'antd';
import { RefSelectProps } from 'antd/lib/select';
import * as S from './BaseSelect.styles';
import { Dimension } from '@app/interfaces/interfaces';

export const { Option } = AntSelect;

export interface BaseSelectProps extends ComponentProps<typeof AntSelect> {
  width?: Dimension;
  shadow?: boolean;
  className?: string;
}

export const BaseSelect = React.forwardRef<RefSelectProps, BaseSelectProps>(
  ({ className, width, shadow, children, ...props }, ref) => (
    <S.Select
      getPopupContainer={(triggerNode) => triggerNode}
      ref={ref}
      className={className}
      $width={width}
      $shadow={shadow}
      {...props}
    >
      {children}
    </S.Select>
  ),
);
