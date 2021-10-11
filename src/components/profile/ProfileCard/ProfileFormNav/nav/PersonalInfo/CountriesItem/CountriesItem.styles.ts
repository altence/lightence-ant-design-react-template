import ReactCountryFlag from 'react-country-flag';
import styled from 'styled-components';

export const CountryFlag = styled(ReactCountryFlag)`
  margin-right: 0.5rem;

  & .ant-select-arrow {
    font-size: 2rem;
    width: 20px;
    height: 20px;
    display: none;
  }
`;
