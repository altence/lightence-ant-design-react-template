import { BORDER_RADIUS } from '@app/styles/themes/constants';
import PhoneInput from 'react-phone-number-input/input';
import styled from 'styled-components';

// has wrong prop types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PhoneNumberInput = styled(PhoneInput as any)`
  height: 50px;
  width: 100%;
  padding: 8px 11px;
  transition: all 0.3s;

  color: var(--text-main-color);

  border: 1px solid var(--border-color);

  border-radius: ${BORDER_RADIUS};

  &:hover {
    border-color: #1d72b8;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(0 89 171 / 20%);
  }
`;
