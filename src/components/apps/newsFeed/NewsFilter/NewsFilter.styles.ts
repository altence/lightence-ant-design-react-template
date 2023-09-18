import styled from 'styled-components';
import { SearchOutlined, PlusCircleFilled, CloseOutlined } from '@ant-design/icons';
import { BaseDatePicker } from '@app/components/common/pickers/BaseDatePicker';
import { BasePopover } from '@app/components/common/BasePopover/BasePopover';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import { media } from '@app/utils/utils';

export const AddTagText = styled.span`
  color: ${({ theme }) => theme.textMain};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
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
  background: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
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
  font-size: ${({ theme }) => theme.fontSizes.xs};
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
  color: ${({ theme }) => theme.lightgray};
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
  background: ${({ theme }) => theme.secondaryBackground};
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
  box-shadow: ${({ theme }) => theme.newsFilterBoxShadow};
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Input = styled(BaseInput)`
  height: 3.125rem;
  border: none;
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 3.125rem;
  padding-left: 3rem;
  color: ${({ theme }) => theme.textMain};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1.375rem;
`;

export const RangePicker = styled(BaseDatePicker.RangePicker)`
  width: 100%;
  margin-bottom: 0.875rem;

  &.ant-picker .ant-picker-input input {
    color: ${({ theme }) => theme.textMain};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export const PanelWrapper = styled.div`
  .ant-picker-panels {
    @media only screen and (${media('xs')}) and (max-width: ${({ theme }) => theme.breakpoints.md - 0.02}px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Btn = styled(BaseButton)`
  display: block;
  width: 100%;
`;

export const NewsWrapper = styled.div`
  max-width: 35rem;

  @media only screen and (${media('xs')}) {
    width: 100%;
  }

  @media only screen and (${media('md')}) {
    width: calc(100% - 21.25rem);
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;

  @media only screen and (${media('md')}) {
    margin-left: 1.875rem;
    position: sticky;
    top: 1.875rem;
    padding: 1.25rem 1rem;
    filter: drop-shadow(${({ theme }) => theme.newsFilterBoxShadow});
    background: ${({ theme }) => theme.background};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const FilterTitle = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.5625rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.textMain};
  margin-bottom: 1rem;
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

export const PopoverCheckbox = styled(BaseCheckbox)`
  margin-right: 1rem;
`;

export const ClosePopoverWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const ClosePopover = styled(CloseOutlined)`
  color: ${({ theme }) => theme.primary};
  width: 0.875rem;
  height: 0.875rem;
`;

export const FilterPopover = styled(BasePopover)`
  & .ant-popover-inner-content {
    padding: 0;
  }
`;
