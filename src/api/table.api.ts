export interface BasicTableRow {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
          { key: '4', name: 'Pavel Green', age: 30, address: 'New York No. 1 Lake Park', tags: ['developer', 'nice'] },
          { key: '5', name: 'Alex Brown', age: 26, address: 'Minsk', tags: ['developer'] },
          { key: '6', name: 'Josh Black', age: 21, address: 'New York No. 1 Lake Park', tags: ['teacher', 'nice'] },
          { key: '7', name: 'Cris Green', age: 22, address: 'Sidney No. 1 Lake Park', tags: ['nice'] },
          { key: '8', name: 'Jaime Black', age: 23, address: 'New York No. 1 Lake Park', tags: ['developer'] },
          { key: '9', name: 'Alina Brown', age: 19, address: 'Minsk', tags: ['cool', 'teacher'] },
        ],
        pagination: { ...pagination, total: 9 },
      });
    }, 1000);
  });
};
