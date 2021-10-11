import React from 'react';
import { Checkbox } from 'antd';
import { Option } from '../interfaces';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import * as S from './CheckboxColumn.styles';

interface CheckboxColumnProps {
  column: Omit<Option, 'id'>;
  handleCheck: (list: CheckboxValueType[]) => void;
  setTriggered: (state: boolean) => void;
}

export const CheckboxColumn: React.FC<CheckboxColumnProps> = ({ column, handleCheck, setTriggered }) => {
  const [checkedList, setCheckedList] = React.useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < column.data.length);
    setCheckAll(list.length === column.data.length);
    handleCheck(list);
    setTriggered(true);
  };

  const onCheckAllChange = (event: CheckboxChangeEvent) => {
    setCheckedList(event.target.checked ? column.data : []);
    setIndeterminate(false);
    setCheckAll(event.target.checked);
    handleCheck(event.target.checked ? column.data : []);
    setTriggered(true);
  };

  const props = {
    indeterminate,
    onChange: onCheckAllChange,
    checked: checkAll,
  };

  return (
    <S.Wrapper>
      <S.HeaderCol>{column.headerRender ? column.headerRender(column.header, props) : column.header}</S.HeaderCol>
      <Checkbox.Group value={checkedList} onChange={onChange}>
        {column.data.map((el, index) => (
          <S.Col key={index}>{column.dataRender ? column.dataRender(el) : el}</S.Col>
        ))}
      </Checkbox.Group>
    </S.Wrapper>
  );
};
