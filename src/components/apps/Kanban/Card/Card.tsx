import React, { useState } from 'react';
import { Tag } from '../Tag/Tag';
import { CardState, Tag as ITag, Participant as IParticipant } from '../interfaces';
import { ReactComponent as ThreeDots } from '../../../../assets/icons/three-dots.svg';
import { ReactComponent as TagPlus } from '../../../../assets/icons/tag-plus.svg';
import StubAvatar from '../../../../assets/images/stub-avatar.png';
import { kanbanTags } from 'constants/kanbanTags';
import * as S from './Card.styles';

interface CardProps {
  style: CSSStyleSheet;
  tagStyle: CSSStyleSheet;
  onClick: () => void;
  onDelete: () => void;
  onChange: (card: CardState) => void;
  className: string;
  id: string | number;
  title: string;
  description: string;
  tags: ITag[];
  participants: IParticipant[];
  cardDraggable: boolean;
  editable: boolean;
}

interface EditPopoverProps {
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onArchive: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface EditTagProps {
  tags: ITag[];
  updateTag: (tag: ITag) => void;
  hidePopover: () => void;
}

const EditPopover: React.FC<EditPopoverProps> = ({ onDelete, onArchive }) => {
  return (
    <S.EditPopover>
      <S.EditPopoverLine onClick={onDelete}>Delete</S.EditPopoverLine>
      <S.EditPopoverLine onClick={onArchive}>Archivate</S.EditPopoverLine>
    </S.EditPopover>
  );
};

const EditTagPopover: React.FC<EditTagProps> = ({ tags, updateTag, hidePopover }) => {
  const kanbanTagData = Object.values(kanbanTags);
  const tagsIds = tags?.length ? tags.map((item) => item.id) : [];
  return (
    <S.EditTagPopover>
      {kanbanTagData.map((tag: ITag) => (
        <S.EditTagPopoverLine
          key={tag.id}
          onClick={(e) => {
            updateTag(tag);
            e.stopPropagation();
          }}
        >
          <S.PopoverCheckbox checked={tagsIds.includes(tag.id)} />
          <S.TagWrapper backgroundColor={tag.bgcolor}>#{tag.title}</S.TagWrapper>
        </S.EditTagPopoverLine>
      ))}
      <S.RemoveTagWrapper onClick={hidePopover}>
        <S.RemoveTag />
      </S.RemoveTagWrapper>
    </S.EditTagPopover>
  );
};

export const Card: React.FC<CardProps> = ({
  style,
  tagStyle,
  onClick,
  onDelete,
  onChange,
  className,
  id,
  title,
  description,
  tags = [],
  participants = [],
  cardDraggable,
  editable,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isShowEditPopover, setIsShowEditPopover] = useState(false);
  const [isShowEditTagPopover, setIsShowEditTagPopover] = useState(false);

  const onArrowPress = () => {
    setIsExpanded(!isExpanded);
  };

  const onThreeDotsPress = () => {
    setIsShowEditPopover(!isShowEditPopover);
  };

  const onDeleteCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    onDelete();
    event.stopPropagation();
  };

  const removeTag = (tag: ITag) => {
    updateCard({ tags: tags.filter((item) => item.id !== tag.id) });
  };

  const updateTag = (tag: ITag) => {
    const isExist = tags?.find((item) => item.id === tag.id);

    if (isExist) {
      removeTag(tag);
    } else {
      updateCard({ tags: [...tags, tag] });
    }
  };

  const removeParticipant = (participant: IParticipant) => {
    updateCard({ participants: participants.filter((item) => item.id !== participant.id) });
  };

  const updateCard = (card: CardState) => {
    onChange({ ...card, id });
  };

  return (
    <S.Card>
      <S.CardWrapper data-id={id} onClick={onClick} style={style} className={className}>
        {title && (
          <S.CardHeader>
            <S.CardTitle draggable={cardDraggable}>
              {editable ? (
                <S.Input
                  name="title"
                  value={title}
                  border
                  placeholder="title"
                  resize="vertical"
                  onSave={(value: string) => updateCard({ title: value })}
                />
              ) : (
                title
              )}
            </S.CardTitle>
            <S.CardRightContent>
              <S.ArrowDownWrapper onClick={onArrowPress}>
                <S.ArrowDown isExpanded={isExpanded} />
              </S.ArrowDownWrapper>
              <S.ThreeDotsWrapper onClick={onThreeDotsPress}>
                <ThreeDots />
              </S.ThreeDotsWrapper>
            </S.CardRightContent>
          </S.CardHeader>
        )}
        {isExpanded && (
          <>
            <S.CardDetails>
              {editable ? (
                <S.Input
                  value={description}
                  border
                  placeholder="description"
                  resize="vertical"
                  onSave={(value: string) => updateCard({ description: value })}
                />
              ) : (
                description
              )}
            </S.CardDetails>
            <S.CardFooter>
              {tags &&
                tags.length > 0 &&
                tags.map((tag) => (
                  <Tag key={tag.title} {...tag} tagStyle={tagStyle} removeTag={() => removeTag(tag)} />
                ))}
              <S.TagPlusWrapper onClick={() => setIsShowEditTagPopover(!isShowEditTagPopover)}>
                <TagPlus />
              </S.TagPlusWrapper>
            </S.CardFooter>
            {participants?.length && (
              <S.ParticipantsWrapper>
                {participants.map((item) => (
                  <S.ParticipantRow key={item.id}>
                    <S.ParticipantAvatar src={item.avatar ? item.avatar : StubAvatar} />
                    <S.ParticipantName>{item.name}</S.ParticipantName>
                    <S.RemoveParticipant onClick={() => removeParticipant(item)} />
                  </S.ParticipantRow>
                ))}
              </S.ParticipantsWrapper>
            )}
          </>
        )}
      </S.CardWrapper>
      {isShowEditPopover && <EditPopover onDelete={onDeleteCard} onArchive={onDeleteCard} />}
      {isShowEditTagPopover && (
        <EditTagPopover tags={tags} updateTag={updateTag} hidePopover={() => setIsShowEditTagPopover(false)} />
      )}
    </S.Card>
  );
};
