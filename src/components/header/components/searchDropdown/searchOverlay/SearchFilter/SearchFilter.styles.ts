import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import { media } from '@app/styles/themes/constants';
import styled, { css } from 'styled-components';

interface FilterWrapperProps {
  isOpen: boolean;
}

export const CheckboxGroup = styled(BaseCheckbox.Group)`
  display: block;
`;

export const FilterWrapper = styled.div<FilterWrapperProps>`
  ${(props) =>
    !props.isOpen &&
    css`
      position: absolute;
      top: 0;
      opacity: 0;
    `}

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CheckBox = styled(BaseCheckbox)`
  font-size: 0.75rem;

  @media only screen and ${media.md} {
    font-size: 0.875rem;
  }
`;
