import { Button } from 'antd';
import { hexToRGB } from 'utils/utils';
import styled from 'styled-components';
import { FormItem } from 'components/common/Form/Form.styles';
import { CardWrapper as Card } from 'react-trello/dist/styles/Base';
import { ButtonsGroup } from 'components/common/Form/ButtonsGroup/ButtonsGroup';

export const FooterButtons = styled(ButtonsGroup)`
  margin-top: 1rem;
`;

export const Btn = styled(Button)`
  width: 100%;
`;

export const TagsBtn = styled(Btn)`
  color: ${(props) => hexToRGB(props.theme.colors.text.main, 0.3)};
`;

export const FormInput = styled(FormItem)`
  @media only screen and ${(props) => props.theme.media.xl} {
    margin-bottom: 1rem;
  }
  font-weight: ${(props) => props.theme.commonFontWeight.medium};
  max-height: 1.25rem;
  &:first-child {
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }
  & .ant-input {
    padding: 0;
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    font-weight: inherit;
  }
  & .ant-input::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
  & .ant-form-item-control-input {
    min-height: auto;
  }
`;

export const CardWrapper = styled(Card)`
  padding: 1.25rem 1rem;
`;
