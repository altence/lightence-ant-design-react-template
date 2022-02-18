import { media } from '@app/styles/themes/constants';
import { Checkbox } from 'antd';
import styled, { css } from 'styled-components';

interface FilterWrapperProps {
  isVisible: boolean;
}

export const CheckboxGroup = styled(Checkbox.Group)`
  display: block;
`;

export const FilterWrapper = styled.div<FilterWrapperProps>`
  ${(props) =>
    !props.isVisible &&
    css`
      position: absolute;
      top: 0;
      opacity: 0;
    `}

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CheckBox = styled(Checkbox)`
  font-size: 0.75rem;

  @media only screen and ${media.md} {
    font-size: 0.875rem;
  }
`;
