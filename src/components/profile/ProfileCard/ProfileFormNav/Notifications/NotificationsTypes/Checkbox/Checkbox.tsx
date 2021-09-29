import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';

interface CheckboxProps {
  list: any;
  id: any;
  name: string;
  isCheck: any;
  setIsCheck: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({ list, id, name, isCheck, setIsCheck }) => {
  const handleClick = (e: any) => {
    const { id, checked } = e.target;

    console.log(id);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item: any) => item !== id));
    }
  };

  return (
    <AntCheckbox key={id} id={id} onChange={handleClick} checked={isCheck.includes(id)}>
      {name}
    </AntCheckbox>
  );
};
