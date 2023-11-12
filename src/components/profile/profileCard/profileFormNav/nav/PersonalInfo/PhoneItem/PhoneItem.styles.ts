import PhoneInput from 'react-phone-number-input/input';
import styled from 'styled-components';

// has wrong prop types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PhoneNumberInput = styled(PhoneInput as any)`
  height: ${({ theme }) => theme.heights.md};
  width: 100%;
  padding: 8px 11px;
  transition: all 0.3s;
  color: ${({ theme }) => theme.textMain};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    border-color: #1d72b8;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(0 89 171 / 20%);
  }
`;
