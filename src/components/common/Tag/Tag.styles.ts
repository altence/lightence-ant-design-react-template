import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { TagSpan } from 'react-trello/dist/styles/Base';

export const RemoveTagWrapper = styled.span`
  padding-left: 0.3125rem;
  display: flex;
  align-items: center;
  padding-top: 1px;
`;

export const RemoveTagIcon = styled(CloseOutlined)`
  color: #ffffff;
  font-size: ${(props) => props.theme.commonFontSizes.xxs};
  cursor: pointer;
`;

export const TagWrapper = styled(TagSpan)`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem 0.625rem;
  margin: 0;
  font-size: ${(props) => props.theme.commonFontSizes.xs};
`;
