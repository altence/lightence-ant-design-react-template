import styled from 'styled-components';
import { Typography, Input as AntInput, Button } from 'antd';
import { LocalizedDatePicker } from 'components/common/pickers/LocalizedDatePicker';

export const Dropdown = styled.div`
  padding: 1rem;
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

export const Title = styled(Typography.Text)`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Input = styled(AntInput)`
  margin-bottom: 0.875rem;
`;

export const RangePicker = styled(LocalizedDatePicker.RangePicker)`
  width: 100%;
  margin-bottom: 0.875rem;
`;

export const Btn = styled(Button)`
  display: block;
`;
