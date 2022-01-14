import styled from 'styled-components';
import { NewLaneSection as NewLane } from 'react-trello/dist/styles/Base';
import { PlusOutlined } from '@ant-design/icons';

export const NewLaneSection = styled(NewLane)`
  background: ${(props) => props.theme.commonColors.skyblue};
  margin-top: 53.28px; // Calculate based on lanes padding, margin and lane header height
  height: 24rem;
  width: 16rem;
  border-radius: 0.4375rem;
  filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.07));
  padding: 3.4375rem 1.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateNewColumn = styled.div`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  color: ${(props) => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NewLaneImage = styled.img`
  margin-top: 3.25rem;
  height: 12.625rem;
`;

export const PlusIcon = styled(PlusOutlined)`
  font-size: ${(props) => props.theme.commonFontSizes.md};
  color: ${(props) => props.theme.colors.text.secondary};
  margin-right: 0.625rem;
`;
