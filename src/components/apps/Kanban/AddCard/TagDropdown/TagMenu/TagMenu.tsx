import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DeleteOutlined } from '@ant-design/icons';
import { Tag } from 'components/apps/Kanban/interfaces';
import { Btn } from '../../AddCard.styles';
import { AddTag } from './AddTag/AddTag';
import { tags as initialTags } from '../../../Kanban';
import * as S from './TagMenu.styles';
import { Col, Row } from 'antd';

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
        prev.includes(tag) ? prev.filter((selectedTag) => selectedTag.title !== tag.title) : [...prev, tag],
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

  const tagsElements = useMemo(
    () =>
      tags.map((tag, index) => (
        <Col span={24} key={index}>
          <S.Tag
            as={Row}
            justify="space-between"
            align="middle"
            gutter={[5, 5]}
            color={tag.bgcolor}
            isActive={selectedTags.includes(tag)}
            onClick={() => selectTag(tag)}
          >
            <Col>{tag.title}</Col>
            <Col>
              <DeleteOutlined onClick={() => removeTag(tag)} />
            </Col>
          </S.Tag>
        </Col>
      )),
    [tags, selectTag, selectedTags, removeTag],
  );

  return (
    <S.TagMenu>
      {isMain ? (
        <>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Row gutter={[10, 10]}>{tagsElements}</Row>
            </Col>
            <Col span={24}>
              <Btn onClick={() => setMain(false)}>{t('kanban.addTags')}</Btn>
            </Col>
          </Row>
        </>
      ) : (
        <AddTag setMain={setMain} setTags={setTags} />
      )}
    </S.TagMenu>
  );
};
