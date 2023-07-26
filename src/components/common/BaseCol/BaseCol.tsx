import { forwardRef } from 'react';
import type { ColProps } from 'antd';
import * as S from './BaseCol.styles';

export type BaseColProps = ColProps;

export const BaseCol = forwardRef<HTMLDivElement, BaseColProps>((props, ref) => <S.Col ref={ref} {...props} />);
