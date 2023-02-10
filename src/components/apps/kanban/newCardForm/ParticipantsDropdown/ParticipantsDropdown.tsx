import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { Participant as IParticipant } from '../../interfaces';
import { kanbanPeople } from 'constants/kanbanPeople';
import StubAvatar from '../../../../../assets/images/stub-avatar.webp';
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
  const kanbanPeopleData = useMemo(() => Object.values(kanbanPeople), []);
  const selectedParticipantsIds = useMemo(() => selectedParticipants.map((item) => item.id), [selectedParticipants]);

  const onPeopleClick = useCallback(
    (tag: IParticipant) => {
      const isExist = selectedParticipantsIds.includes(tag.id);

      if (isExist) {
        setSelectedParticipants(selectedParticipants.filter((item) => item.id !== tag.id));
      } else {
        setSelectedParticipants([...selectedParticipants, tag]);
      }
    },
    [selectedParticipantsIds, selectedParticipants, setSelectedParticipants],
  );

  const items = useMemo(
    () =>
      kanbanPeopleData.map((participant: IParticipant, i) => ({
        key: `${i + 1}`,
        label: (
          <S.ParticipantRow
            onClick={(e) => {
              onPeopleClick(participant);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedParticipantsIds.includes(participant.id)} />
            <S.ParticipantAvatar src={participant.avatar ? participant.avatar : StubAvatar} />
            <S.ParticipantName>{participant.name}</S.ParticipantName>
          </S.ParticipantRow>
        ),
      })),
    [kanbanPeopleData, onPeopleClick, selectedParticipantsIds],
  );

  return (
    <Dropdown placement="bottom" trigger={['click']} menu={{ items }}>
      {selectedParticipants && selectedParticipants.length > 0 ? (
        <S.ParticipantsWrapper>
          {selectedParticipants.map((participant) => (
            <S.ParticipantRow key={participant.id}>
              <S.ParticipantAvatar src={participant.avatar ? participant.avatar : StubAvatar} />
              <S.ParticipantName>{participant.name}</S.ParticipantName>
              <S.RemoveParticipant
                onClick={(e) => {
                  e.stopPropagation();
                  onPeopleClick(participant);
                }}
              />
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
