import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { FONT_SIZE } from '@app/styles/themes/constants';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';

export const PopoverCheckbox = styled(BaseCheckbox)`
  margin-right: 0.75rem;
`;

export const RemoveParticipantWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
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
