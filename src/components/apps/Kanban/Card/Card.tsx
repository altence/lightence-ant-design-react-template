import React from 'react';
import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer,
} from 'react-trello/dist/styles/Base';
import InlineInput from 'react-trello/dist/widgets/InlineInput';
import Tag from 'react-trello/dist/components/Card/Tag';
import DeleteButton from 'react-trello/dist/widgets/DeleteButton';

interface CardProps {
  showDeleteButton: boolean;
  style: CSSStyleSheet;
  tagStyle: CSSStyleSheet;
  onClick: () => void;
  onDelete: () => void;
  onChange: (card: any) => void;
  className: string;
  id: string | number;
  title: string;
  label: string;
  description: string;
  tags: { title: string; color: string; bgcolor: string }[];
  cardDraggable: boolean;
  editable: boolean;
  t: () => void;
}

export const Card: React.FC<CardProps> = ({
  showDeleteButton,
  style,
  tagStyle,
  onClick,
  onDelete,
  onChange,
  className,
  id,
  title,
  label,
  description,
  tags,
  cardDraggable,
  editable,
}) => {
  const onDeleteCard = (event: MouseEvent) => {
    onDelete();
    event.stopPropagation();
  };

  const updateCard = (card: any) => {
    onChange({ ...card, id });
  };

  return (
    <MovableCardWrapper data-id={id} onClick={onClick} style={style} className={className}>
      {title && (
        <CardHeader>
          <CardTitle draggable={cardDraggable}>
            {editable ? (
              <InlineInput
                value={title}
                border
                placeholder="title"
                resize="vertical"
                onSave={(value: string) => updateCard({ title: value })}
              />
            ) : (
              title
            )}
          </CardTitle>
          <CardRightContent>
            {editable ? (
              <InlineInput
                value={label}
                border
                placeholder="label"
                resize="vertical"
                onSave={(value: string) => updateCard({ label: value })}
              />
            ) : (
              label
            )}
          </CardRightContent>
          {showDeleteButton && <DeleteButton onClick={onDeleteCard} />}
        </CardHeader>
      )}
      {!title && showDeleteButton && <DeleteButton onClick={onDeleteCard} />}
      <Detail>
        {editable ? (
          <InlineInput
            value={description}
            border
            placeholder="description"
            resize="vertical"
            onSave={(value: string) => updateCard({ description: value })}
          />
        ) : (
          description
        )}
      </Detail>
      {tags && tags.length > 0 && (
        <Footer>
          {tags.map((tag) => (
            <Tag key={tag.title} {...tag} tagStyle={tagStyle} />
          ))}
        </Footer>
      )}
    </MovableCardWrapper>
  );
};
