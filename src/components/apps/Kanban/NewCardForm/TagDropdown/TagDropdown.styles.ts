import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

interface TagProps {
  backgroundColor: string;
}

export const EditTagPopover = styled.div`
  padding: 1.25rem 1.5625rem;
  max-width: 14.375rem;
  min-width: 14.375rem;
  gap: 0.625rem;
  display: flex;
  background: ${(props) => props.theme.commonColors.white};
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
    border-color: ${(props) => props.theme.colors.main.primary};
  }
  & .ant-checkbox-checked .ant-checkbox-inner::after {
    left: 0.375rem;
  }
`;

export const TagWrapper = styled.span<TagProps>`
  height: 1.875rem;
  background-color: ${(props) => `${props.backgroundColor}`};
  padding: 0.3125rem 0.625rem;
  color: ${(props) => props.theme.commonColors.white};
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  margin-left: 1rem;
`;

export const RemoveTagWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const RemoveTag = styled(CloseOutlined)`
  color: ${(props) => props.theme.colors.main.primary};
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
  color: ${(props) => props.theme.commonColors.lightgrey};
  font-size: ${(props) => props.theme.commonFontSizes.xxl};
`;

export const AddTag = styled.span`
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  line-height: 1.25px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.text.light};
`;
