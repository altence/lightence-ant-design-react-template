import styled from 'styled-components';
import { MaskedInput as AntMaskedInput } from 'antd-mask-input';

// https://github.com/antoniopresto/antd-mask-input/issues/73
export const MaskedInput = styled(AntMaskedInput)`
  font-family: inherit;
  color: ${({ theme }) => theme.textMain};
  background-color: ${({ theme }) => theme.background};
  padding: 11.4px 11px;
  border: 1px solid ${({ theme }) => theme.borderBase};
  border-radius: ${({ theme }) => theme.borderRadius};

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }
`;
