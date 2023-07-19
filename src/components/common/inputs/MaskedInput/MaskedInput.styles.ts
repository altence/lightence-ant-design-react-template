import styled from 'styled-components';
import AntdMaskedInput from 'antd-mask-input';
import { BORDER_RADIUS } from '@app/styles/themes/constants';

// https://github.com/antoniopresto/antd-mask-input/issues/73
export const MaskedInput = styled(AntdMaskedInput)`
  font-family: inherit;
  color: var(--text-main-color);
  background-color: var(--background-color);
  padding: 11.4px 11px;
  border: 1px solid var(--border-base-color);
  border-radius: ${BORDER_RADIUS};

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`;
