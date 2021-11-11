import React from 'react';
import { Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { Participant as IParticipant } from '../../interfaces';
import { kanbanPeople } from 'constants/kanbanPeople';
import StubAvatar from '../../../../../assets/images/stub-avatar.png';
import * as S from './ParticipantsDropdown.styles';

interface ParticipantsDropdownProps {
  selectedParticipants: IParticipant[];
  setSelectedParticipants: (state: IParticipant[]) => void;
}

export const ParticipantsDropdown: React.FC<ParticipantsDropdownProps> = ({
  selectedParticipants,
  setSelectedParticipants,
}) => {
  const { t } = useTranslation();
  const kanbanPeopleData = Object.values(kanbanPeople);
  const selectedParticipantsIds = selectedParticipants.map((item) => item.id);

  const onPeopleClick = (tag: IParticipant) => {
    const isExist = selectedParticipantsIds.includes(tag.id);

    if (isExist) {
      setSelectedParticipants(selectedParticipants.filter((item) => item.id !== tag.id));
    } else {
      setSelectedParticipants([...selectedParticipants, tag]);
    }
  };

  return (
    <Dropdown
      placement="bottomCenter"
      trigger={['click']}
      overlay={
        <S.EditParticipantPopover>
          {kanbanPeopleData.map((participant: IParticipant) => (
            <S.ParticipantRow
              key={participant.id}
              onClick={(e) => {
                onPeopleClick(participant);
                e.stopPropagation();
              }}
            >
              <S.PopoverCheckbox checked={selectedParticipantsIds.includes(participant.id)} />
              <S.ParticipantAvatar src={participant.avatar ? participant.avatar : StubAvatar} />
              <S.ParticipantName>{participant.name}</S.ParticipantName>
            </S.ParticipantRow>
          ))}
          <S.RemoveParticipantWrapper>
            <S.ClosePopover />
          </S.RemoveParticipantWrapper>
        </S.EditParticipantPopover>
      }
    >
      {selectedParticipants && selectedParticipants.length > 0 ? (
        <S.ParticipantsWrapper>
          {selectedParticipants.map((participant) => (
            <S.ParticipantRow
              key={participant.id}
              onClick={(e) => {
                onPeopleClick(participant);
                e.stopPropagation();
              }}
            >
              <S.ParticipantAvatar src={participant.avatar ? participant.avatar : StubAvatar} />
              <S.ParticipantName>{participant.name}</S.ParticipantName>
              <S.RemoveParticipant onClick={() => onPeopleClick(participant)} />
            </S.ParticipantRow>
          ))}
        </S.ParticipantsWrapper>
      ) : (
        <S.ParticipantsWrapper>
          <S.AddParticipant>{t('kanban.addParticipant')}</S.AddParticipant>
        </S.ParticipantsWrapper>
      )}
    </Dropdown>
  );
};
