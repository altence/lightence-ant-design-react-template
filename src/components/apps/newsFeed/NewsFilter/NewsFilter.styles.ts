import styled from 'styled-components';
import { Input as AntInput, Button, Checkbox } from 'antd';
import { SearchOutlined, PlusCircleFilled, CloseOutlined } from '@ant-design/icons';
import { DayjsDatePicker } from '@app/components/common/pickers/DayjsDatePicker';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';

export const AddTagText = styled.span`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  line-height: 1.375rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterButton = styled.div`
  height: 3.125rem;
  width: 6.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  border-radius: ${BORDER_RADIUS};
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.semibold};
  line-height: 1.25rem;
`;

export const DateLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateLabel = styled.div`
  width: 50%;
  line-height: 1.25rem;
  margin-bottom: 0.4375rem;
  font-size: ${FONT_SIZE.xs};
`;

export const AddTagWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 0.625rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PlusIcon = styled(PlusCircleFilled)`
  color: var(--lightgrey);
  font-size: 1.5625rem;
  margin-right: 1rem;
`;

export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  z-index: 2;
  left: 1.25rem;
  top: 1.0625rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 3.125rem;
  border-radius: 3.125rem;
  background: var(--secondary-background-color);
  margin-bottom: 1.25rem;
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.875rem;
`;

export const TitleHeader = styled.div`
  display: inline-block;
  padding: 1rem;
  margin-bottom: 1.25rem;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  background-color: var(--background-color);
  border-radius: ${BORDER_RADIUS};
`;

export const Input = styled(AntInput)`
  height: 3.125rem;
  border: none;
  background: var(--secondary-background-color);
  border-radius: 3.125rem;
  padding-left: 3rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  line-height: 1.375rem;
`;

export const RangePicker = styled(DayjsDatePicker.RangePicker)`
  width: 100%;
  margin-bottom: 0.875rem;

  & input {
    color: var(--text-main-color);
    font-size: ${FONT_SIZE.xs};
    font-weight: ${FONT_WEIGHT.semibold};
  }
`;

export const Btn = styled(Button)`
  display: block;
  width: 100%;
`;

export const NewsWrapper = styled.div`
  max-width: 35rem;

  @media only screen and ${media.xs} {
    width: 100%;
  }

  @media only screen and ${media.md} {
    width: calc(100% - 21.25rem);
  }
`;

export const FilterWrapper = styled.div`
  position: sticky;
  top: 1.25rem;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  margin-left: 1.875rem;
  background: var(--background-color);
  border-radius: ${BORDER_RADIUS};
  height: min-content;
  filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.07));

  @media only screen and ${media.xs} {
    position: relative;
  }

  @media only screen and ${media.md} {
    position: sticky;
  }
`;

export const FilterTitle = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.5625rem;
  font-size: ${FONT_SIZE.lg};
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-main-color);
  margin-bottom: 1rem;
`;

export const TagPopover = styled.div`
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

export const TagPopoverLine = styled.span`
  line-height: 1.25rem;
  display: flex;
  &:last-child {
    padding-bottom: 0;
  }
  align-items: center;
  cursor: pointer;
`;

export const PopoverCheckbox = styled(Checkbox)`
  margin-right: 1rem;
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

export const ClosePopoverWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const ClosePopover = styled(CloseOutlined)`
  color: var(--primary-color);
  width: 0.875rem;
  height: 0.875rem;
`;
