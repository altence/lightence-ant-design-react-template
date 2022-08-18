import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { Tag as ITag } from '../../interfaces';
import { kanbanTags } from 'constants/kanbanTags';
import * as S from './TagDropdown.styles';
import { Tag } from 'components/common/Tag/Tag';
import { PlusCircleFilled } from '@ant-design/icons';

interface TagDropdownProps {
  selectedTags: ITag[];
  setSelectedTags: (state: ITag[]) => void;
}

export const TagDropdown: React.FC<TagDropdownProps> = ({ selectedTags, setSelectedTags }) => {
  const { t } = useTranslation();

  const kanbanTagData = Object.values(kanbanTags);
  const selectedTagsIds = selectedTags.map((item) => item.id);

  const onTagClick = (tag: ITag) => {
    const isExist = selectedTagsIds.includes(tag.id);

    if (isExist) {
      setSelectedTags(selectedTags.filter((item) => item.id !== tag.id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <Dropdown
      trigger={['click']}
      overlay={
        <S.EditTagPopover>
          {kanbanTagData.map((tag: ITag) => (
            <S.EditTagPopoverLine
              key={tag.id}
              onClick={(e) => {
                onTagClick(tag);
                e.stopPropagation();
              }}
            >
              <S.PopoverCheckbox checked={selectedTagsIds.includes(tag.id)} />
              <S.TagWrapper backgroundColor={tag.bgColor}>#{tag.title}</S.TagWrapper>
            </S.EditTagPopoverLine>
          ))}
          <S.RemoveTagWrapper>
            <S.RemoveTag />
          </S.RemoveTagWrapper>
        </S.EditTagPopover>
      }
    >
      {selectedTags && selectedTags.length > 0 ? (
        <S.TagsWrapper>
          {selectedTags.map((tag) => (
            <Tag key={tag.id} {...tag} removeTag={() => onTagClick(tag)} />
          ))}
          <S.TagPlusWrapper>
            <PlusCircleFilled />
          </S.TagPlusWrapper>
        </S.TagsWrapper>
      ) : (
        <S.TagsWrapper>
          <S.AddTag>{t('kanban.addTag')}</S.AddTag>
        </S.TagsWrapper>
      )}
    </Dropdown>
  );
};
