import styled from 'styled-components';
import { FONT_SIZE } from '@app/styles/themes/constants';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';

interface TagProps {
  backgroundColor: 'error' | 'warning' | 'success' | 'primary';
}

export const EditTagPopoverLine = styled.span`
  line-height: 1.25rem;
  display: flex;
  &:last-child {
    padding-bottom: 0;
  }
  align-items: center;
  cursor: pointer;
`;

export const PopoverCheckbox = styled(BaseCheckbox)``;

export const TagWrapper = styled.span<TagProps>`
  height: 1.875rem;
  background-color: ${(props) => `var(--${props.backgroundColor}-color)`};
  padding: 0.3125rem 0.625rem;
  color: var(--text-secondary-color);
  border-radius: 0.5rem;
  font-size: ${FONT_SIZE.xs};
  margin-left: 1rem;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 1rem;
  min-height: 1.25rem;
  align-items: center;
`;

export const TagPlusWrapper = styled.span`
  display: flex;
  height: 1.875rem;
  align-items: center;
  color: var(--lightgrey);
  font-size: ${FONT_SIZE.xxl};
`;

export const AddTag = styled.span`
  font-size: ${FONT_SIZE.xs};
  line-height: 1.25rem;
  text-decoration: underline;
  color: var(--text-light-color);
`;
