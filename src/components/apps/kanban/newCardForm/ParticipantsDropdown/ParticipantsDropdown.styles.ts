import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { FONT_SIZE } from '@app/styles/themes/constants';

export const EditParticipantPopover = styled.div`
  padding: 1.25rem 1rem;
  max-width: 14.375rem;
  gap: 0.625rem;
  display: flex;
  background: var(--background-color);
  flex-direction: column;
  border-radius: 0.625rem;
  z-index: 1;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
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
  margin-right: 0.75rem;
`;

export const RemoveParticipantWrapper = styled.div`
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

export const AddParticipant = styled.span`
  font-size: ${FONT_SIZE.xs};
  line-height: 1.25rem;
  text-decoration: underline;
  color: var(--text-light-color);
`;

export const ParticipantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ParticipantRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ParticipantAvatar = styled.img`
  height: 1.5625rem;
  width: 1.5625rem;
  border-radius: 50%;
`;

export const ParticipantName = styled.div`
  font-size: ${FONT_SIZE.xs};
  color: var(--text-main-color);
  margin-left: 0.625rem;
  margin-right: 0.625rem;
`;

export const RemoveParticipant = styled(CloseOutlined)`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.xxs};
`;
