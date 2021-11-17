import styled from 'styled-components';
import { Input as AntInput, Button } from 'antd';
import { DayjsDatePicker } from 'components/common/pickers/DayjsDatePicker';
import theme from '../../../../styles/theme';
import { SearchOutlined, PlusCircleFilled, CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

export const AddTagText = styled.span`
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
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
  background: ${(props) => props.theme.colors.main.mainBackground};
  border-radius: ${(props) => props.theme.border.radius};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
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
  font-size: ${(props) => props.theme.commonFontSizes.xs};
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
  color: ${(props) => props.theme.commonColors.lightgrey};
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
  background: ${(props) => props.theme.colors.main.secondaryBackground};
  margin-bottom: 1.25rem;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 1.875rem;
  font-size: ${(props) => props.theme.commonFontSizes.xxl};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${theme.media.xs} {
    margin-top: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 1.875rem;
`;

export const TitleHeader = styled.div`
  display: inline-block;
  padding: 1rem;
  margin-bottom: 1.25rem;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.main.mainBackground};
  border-radius: ${(props) => props.theme.border.radius};
`;

export const Input = styled(AntInput)`
  height: 3.125rem;
  border: none;
  background: ${(props) => props.theme.colors.main.secondaryBackground};
  border-radius: 3.125rem;
  padding-left: 3rem;
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  line-height: 1.375rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.text.main};
  }
`;

export const RangePicker = styled(DayjsDatePicker.RangePicker)`
  width: 100%;
  margin-bottom: 0.875rem;

  & input {
    color: ${(props) => props.theme.colors.text.main};
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }
`;

export const Btn = styled(Button)`
  display: block;
  width: 100%;
`;

export const NewsWrapper = styled.div`
  max-width: 50rem;

  @media only screen and ${theme.media.xs} {
    width: 100%;
  }

  @media only screen and ${theme.media.md} {
    width: calc(100% - 21.25rem);
  }

  @media only screen and ${theme.media.xl} {
    width: calc(100% - 21.25rem);
  }

  @media only screen and ${theme.media.xxl} {
    width: calc(100% - 21.25rem);
  }
`;

export const FilterWrapper = styled.div`
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  width: 16.875rem;
  margin-left: 1.875rem;
  background: ${(props) => props.theme.colors.main.mainBackground};
  border-radius: ${(props) => props.theme.border.radius};
  height: min-content;
  filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.07));
`;

export const FilterTitle = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.5625rem;
  font-size: ${(props) => props.theme.commonFontSizes.lg};
  font-weight: ${(props) => props.theme.commonFontWeight.bold};
  color: ${(props) => props.theme.colors.text.main};
  margin-bottom: 1rem;
`;

export const TagPopover = styled.div`
  padding: 1.25rem 1.5625rem;
  max-width: 14.375rem;
  min-width: 14.375rem;
  gap: 0.625rem;
  display: flex;
  background: ${(props) => props.theme.colors.main.mainBackground};
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
    border-color: ${(props) => props.theme.colors.main.primary};
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
  color: ${(props) => props.theme.colors.main.primary};
  width: 0.875rem;
  height: 0.875rem;
`;
