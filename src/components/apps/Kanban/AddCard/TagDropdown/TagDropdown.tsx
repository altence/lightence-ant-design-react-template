import React from 'react';
import { Dropdown } from 'antd';
import { TagsBtn } from '../AddCard.styles';
import { TagMenu } from './TagMenu/TagMenu';
import { useTranslation } from 'react-i18next';
import { Tag } from '../../interfaces';

interface TagDropdownProps {
  selectedTags: Tag[];
  setSelectedTags: (func: (state: Tag[]) => Tag[]) => void;
}

export const TagDropdown: React.FC<TagDropdownProps> = ({ selectedTags, setSelectedTags }) => {
  const { t } = useTranslation();

  return (
    <Dropdown
      placement="topRight"
      trigger={['click']}
      overlay={<TagMenu selectedTags={selectedTags} setSelectedTags={setSelectedTags} />}
    >
      <TagsBtn type="text">{t('kanban.tags')}</TagsBtn>
    </Dropdown>
  );
};
