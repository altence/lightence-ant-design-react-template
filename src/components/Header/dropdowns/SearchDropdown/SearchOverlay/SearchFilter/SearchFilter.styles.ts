import { Checkbox } from 'antd';
import styled, { css } from 'styled-components';

interface FilterWrapperProps {
  isVisible: boolean;
}

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 4rem;
  gap: 0.35rem 2rem;

  & .ant-checkbox-wrapper {
    margin: 0;
  }
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

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 0.875rem;
  }
`;
