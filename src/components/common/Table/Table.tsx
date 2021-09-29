import { Checkbox } from 'antd';
import React, { useState } from 'react';

interface Column {
  name: React.ReactNode;
  field: string;
  //   render?: (content: React.ReactNode) => React.ReactNode;
  checkbox?: boolean;
  renderHead?: any;
  renderItems?: any;
}

interface DataItem {
  [key: string]: any;
}

interface TableProps {
  columns: Column[];
  data: DataItem[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((head, index) => (
            <td key={index}>{head.renderHead ? head.renderHead(head.name, data, head.field) : head.name}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.entries(row).map((item) =>
              columns.map((head, index) => {
                if (head.field === item[0]) {
                  return (
                    <td key={index}>
                      {head.renderItems ? head.renderItems(item[1].name, item[1].id, row) : item[1].name}
                    </td>
                  );
                }
              }),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
