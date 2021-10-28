import PhoneInput from 'react-phone-number-input/input';
import styled from 'styled-components';

export const PhoneNumberInput = styled(PhoneInput)`
  height: 50px;
  width: 100%;
  padding: 8px 11px;
  transition: all 0.3s;

  color: ${(props) => props.theme.colors.text.main};

  border: 1px solid ${(props) => props.theme.colors.border.main};

  border-radius: ${(props) => props.theme.border.radius};

  &:hover {
    border-color: #1d72b8;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(0 89 171 / 20%);
  }
`;
