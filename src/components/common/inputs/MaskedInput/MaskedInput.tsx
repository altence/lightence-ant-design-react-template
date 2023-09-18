import { forwardRef, ComponentPropsWithRef } from 'react';
import type { InputRef } from 'antd';
import type { MaskedInput as AntMaskedInput } from 'antd-mask-input';
import * as S from './MaskedInput.styles';

export type MaskedInputProps = ComponentPropsWithRef<typeof AntMaskedInput>;

export const MaskedInput = forwardRef<InputRef, MaskedInputProps>((props, ref) => {
  return <S.MaskedInput ref={ref} {...props} />;
});
