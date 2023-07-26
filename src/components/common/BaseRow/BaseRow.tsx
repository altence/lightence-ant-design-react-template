import { forwardRef } from 'react';
import type { RowProps } from 'antd';
import * as S from './BaseRow.styles';

export type BaseRowProps = RowProps;

export const BaseRow = forwardRef<HTMLDivElement, BaseRowProps>((props, ref) => <S.Row ref={ref} {...props} />);
