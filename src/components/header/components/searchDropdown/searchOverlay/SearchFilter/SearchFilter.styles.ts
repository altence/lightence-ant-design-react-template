import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import { media } from '@app/utils/utils';
import styled, { css } from 'styled-components';

interface FilterWrapperProps {
  isopen: boolean;
}

export const CheckboxGroup = styled(BaseCheckbox.Group)`
  display: block;
`;

export const FilterWrapper = styled.div<FilterWrapperProps>`
  ${(props) =>
    !props.isopen &&
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
  font-size: ${({ theme }) => theme.fontSizes.xxs};

  @media only screen and (${media('md')}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
