import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined } from '@ant-design/icons';
import { Tag } from 'components/apps/Kanban/interfaces';
import { Btn } from '../../AddCard.styles';
import { AddTag } from './AddTag/AddTag';
import { tags as initialTags } from '../../../Kanban';
import * as S from './TagMenu.styles';

interface TagMenuProps {
  selectedTags: Tag[];
  setSelectedTags: (func: (state: Tag[]) => Tag[]) => void;
}

export const TagMenu: React.FC<TagMenuProps> = ({ selectedTags, setSelectedTags }) => {
  const [isMain, setMain] = useState(true);
  const [tags, setTags] = useState<Tag[]>(Object.values(initialTags));

  const { t } = useTranslation();

  const selectTag = useCallback(
    (tag) => {
      setSelectedTags((prev) =>
        selectedTags.includes(tag) ? prev.filter((selectedTag) => selectedTag.title !== tag.title) : [...prev, tag],
      );
    },
    [setSelectedTags, selectedTags],
  );

  const removeTag = useCallback(
    (tag) => {
      setTags(tags.filter((stateTag) => stateTag.title !== tag.title));
    },
    [setTags, tags],
  );

  return (
    <S.TagMenu>
      {isMain ? (
        <>
          <S.Title>{t('kanban.tags')}</S.Title>
          <S.TagWrapper>
            {tags.map((tag, index) => (
              <S.Tag key={index} color={tag.bgcolor} onClick={() => selectTag(tag)}>
                {tag.title}
                <S.ControlsWrapper isActive={selectedTags.includes(tag)}>
                  <div>&#10003;</div>
                  <DeleteOutlined onClick={() => removeTag(tag)} />
                </S.ControlsWrapper>
              </S.Tag>
            ))}
          </S.TagWrapper>
          <Btn onClick={() => setMain(false)}>{t('kanban.addTags')}</Btn>
        </>
      ) : (
        <AddTag setMain={setMain} setTags={setTags} />
      )}
    </S.TagMenu>
  );
};
