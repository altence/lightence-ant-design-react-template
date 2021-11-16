import React, { useState } from 'react';
import { CardState, Tag as ITag, Participant as IParticipant } from '../interfaces';
import { MoreOutlined } from '@ant-design/icons';
import * as S from './Card.styles';
import { Dropdown } from 'antd';
import { ParticipantsDropdown } from '../NewCardForm/ParticipantsDropdown/ParticipantsDropdown';
import { TagDropdown } from '../NewCardForm/TagDropdown/TagDropdown';
import { useTranslation } from 'react-i18next';

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

const EditPopover: React.FC<EditPopoverProps> = ({ onDelete, onArchive }) => {
  return (
    <S.EditPopover>
      <S.EditPopoverLine onClick={onDelete}>Delete</S.EditPopoverLine>
      <S.EditPopoverLine onClick={onArchive}>Archivate</S.EditPopoverLine>
    </S.EditPopover>
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

  const onArrowPress = () => {
    setIsExpanded(!isExpanded);
  };

  const updateCard = (card: CardState) => {
    onChange({ ...card, id });
  };

  const onDeleteCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    onDelete();
    event.stopPropagation();
  };

  const updateTags = (tags: ITag[]) => {
    updateCard({ tags });
  };

  const updateParticipants = (participants: IParticipant[]) => {
    updateCard({ participants });
  };

  return (
    <S.CardWrapper data-id={id} onClick={onClick} style={style} className={className}>
      <S.CollapseCard onChange={onArrowPress} bordered={false} defaultActiveKey={['1']}>
        <S.CardContent
          showArrow={false}
          key="1"
          header={
            <S.CardHeader>
              <S.CardTitle
                draggable={cardDraggable}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                }}
              >
                {editable ? (
                  <S.Input
                    name="title"
                    value={title}
                    border
                    placeholder={t('kanban.title')}
                    resize="vertical"
                    onSave={(value: string) => updateCard({ title: value })}
                  />
                ) : (
                  title
                )}
              </S.CardTitle>
              <S.CardRightContent>
                <S.ArrowDownWrapper>
                  <S.ArrowDownIcon expanded={isExpanded ? 1 : 0} />
                </S.ArrowDownWrapper>
                <Dropdown
                  overlay={<EditPopover onDelete={onDeleteCard} onArchive={onDeleteCard} />}
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <S.ThreeDotsWrapper
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <MoreOutlined />
                  </S.ThreeDotsWrapper>
                </Dropdown>
              </S.CardRightContent>
            </S.CardHeader>
          }
        >
          <S.CardDetails>
            {editable ? (
              <S.Input
                value={description}
                border
                placeholder={t('kanban.description')}
                resize="vertical"
                onSave={(value: string) => updateCard({ description: value })}
              />
            ) : (
              description
            )}
          </S.CardDetails>
          <S.CardFooter>
            <TagDropdown selectedTags={tags} setSelectedTags={updateTags} />
          </S.CardFooter>

          <S.ParticipantsWrapper>
            <ParticipantsDropdown selectedParticipants={participants} setSelectedParticipants={updateParticipants} />
          </S.ParticipantsWrapper>
        </S.CardContent>
      </S.CollapseCard>
    </S.CardWrapper>
  );
};
