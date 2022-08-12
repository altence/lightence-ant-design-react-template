import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { FONT_SIZE } from '@app/styles/themes/constants';

interface TagProps {
  backgroundColor: 'error' | 'warning' | 'success' | 'primary';
}

export const EditTagPopover = styled.div`
  padding: 1.25rem 1.5625rem;
  max-width: 14.375rem;
  min-width: 14.375rem;
  gap: 0.625rem;
  display: flex;
  background: var(--background-color);
  flex-direction: column;
  border-radius: 0.625rem;
  z-index: 1;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
`;

export const EditTagPopoverLine = styled.span`
  line-height: 1.25rem;
  display: flex;
  &:last-child {
    padding-bottom: 0;
  }
  align-items: center;
  cursor: pointer;
`;

export const PopoverCheckbox = styled(Checkbox)`
  & .ant-checkbox .ant-checkbox-inner {
    border-radius: 3px;
    height: 1.375rem;
    width: 1.375rem;
    border-color: var(--primary-color);
  }
  & .ant-checkbox-checked .ant-checkbox-inner::after {
    left: 0.375rem;
  }
`;

export const TagWrapper = styled.span<TagProps>`
  height: 1.875rem;
  background-color: ${(props) => `var(--${props.backgroundColor}-color)`};
  padding: 0.3125rem 0.625rem;
  color: var(--text-secondary-color);
  border-radius: 0.5rem;
  font-size: ${FONT_SIZE.xs};
  margin-left: 1rem;
`;

export const RemoveTagWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const RemoveTag = styled(CloseOutlined)`
  color: var(--primary-color);
  width: 0.875rem;
  height: 0.875rem;
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
