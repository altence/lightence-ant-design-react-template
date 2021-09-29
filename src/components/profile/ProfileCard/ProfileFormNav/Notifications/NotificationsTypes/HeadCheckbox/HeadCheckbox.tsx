import { Checkbox } from 'antd';
import React, { useState } from 'react';

interface HeadCheckboxProps {
  setIsCheck: any;
  list: any[];
  name: string;
  field: string;
}

interface Row {
  [key: string]: {
    name: string;
    id: number;
  };
}

export const HeadCheckbox: React.FC<HeadCheckboxProps> = ({ name, setIsCheck, list, field }) => {
  const [isCheckAll, setIsCheckAll] = useState<any>(false);

  const handleSelectAll = (e: any) => {
    setIsCheckAll(!isCheckAll);

    setIsCheck(list.map((row: Row) => row[field].id).filter((id) => !isNaN(id)));

    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  return (
    <Checkbox checked={isCheckAll} onChange={handleSelectAll}>
      {name}
    </Checkbox>
  );
};
