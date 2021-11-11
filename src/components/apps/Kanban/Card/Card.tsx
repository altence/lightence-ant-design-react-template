import React, { useState } from 'react';
import { Tag } from '../Tag/Tag';
import { CardState, Tag as ITag, Participant as IParticipant } from '../interfaces';
import { ReactComponent as ThreeDots } from '../../../../assets/icons/three-dots.svg';
import { ReactComponent as TagPlus } from '../../../../assets/icons/tag-plus.svg';
import { kanbanTags } from 'constants/kanbanTags';
import * as S from './Card.styles';
import { Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';
import { ParticipantsDropdown } from '../AddCard/ParticipantsDropdown/ParticipantsDropdown';
interface CardProps {
  style: CSSStyleSheet;
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
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isShowEditTagPopover, setIsShowEditTagPopover] = useState(false);

  const onArrowPress = () => {
    setIsExpanded(!isExpanded);
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

  const updateParticipants = (participants: IParticipant[]) => {
    updateCard({ participants });
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
              <Dropdown
                overlay={<EditPopover onDelete={onDeleteCard} onArchive={onDeleteCard} />}
                placement="bottomRight"
                trigger={['click']}
              >
                <S.ThreeDotsWrapper>
                  <ThreeDots />
                </S.ThreeDotsWrapper>
              </Dropdown>
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
                tags.map((tag) => <Tag key={tag.id} {...tag} removeTag={() => removeTag(tag)} />)}
              <Dropdown
                placement="bottomLeft"
                trigger={['click']}
                visible={isShowEditTagPopover}
                overlay={
                  <EditTagPopover
                    tags={tags}
                    updateTag={updateTag}
                    hidePopover={() => setIsShowEditTagPopover(false)}
                  />
                }
              >
                {tags && tags.length > 0 ? (
                  <S.TagPlusWrapper onClick={() => setIsShowEditTagPopover(!isShowEditTagPopover)}>
                    <TagPlus />
                  </S.TagPlusWrapper>
                ) : (
                  <S.AddTag onClick={() => setIsShowEditTagPopover(!isShowEditTagPopover)}>
                    {t('kanban.addTag')}
                  </S.AddTag>
                )}
              </Dropdown>
            </S.CardFooter>

            <S.ParticipantsWrapper>
              <ParticipantsDropdown selectedParticipants={participants} setSelectedParticipants={updateParticipants} />
            </S.ParticipantsWrapper>
          </>
        )}
      </S.CardWrapper>
    </S.Card>
  );
};
