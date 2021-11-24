export interface BasicTableRow {
  key: number;
  name: string;
  age: number;
  address: string;
  tags?: string[];
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

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: 3,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
          { key: 4, name: 'Pavel Green', age: 30, address: 'New York No. 1 Lake Park', tags: ['developer', 'nice'] },
          { key: 5, name: 'Alex Brown', age: 26, address: 'Minsk', tags: ['developer'] },
          { key: 6, name: 'Josh Black', age: 21, address: 'New York No. 1 Lake Park', tags: ['teacher', 'nice'] },
          { key: 7, name: 'Cris Green', age: 22, address: 'Sidney No. 1 Lake Park', tags: ['nice'] },
          { key: 8, name: 'Jaime Black', age: 23, address: 'New York No. 1 Lake Park', tags: ['developer'] },
          { key: 9, name: 'Alina Brown', age: 19, address: 'Minsk', tags: ['cool', 'teacher'] },
        ],
        pagination: { ...pagination, total: 9 },
      });
    }, 1000);
  });
};

export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [
              {
                key: 11,
                name: 'John Brown',
                age: 42,
                address: 'New York No. 2 Lake Park',
              },
              {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                address: 'New York No. 3 Lake Park',
                children: [
                  {
                    key: 121,
                    name: 'Jimmy Brown',
                    age: 16,
                    address: 'New York No. 3 Lake Park',
                  },
                ],
              },
              {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
                address: 'London No. 1 Lake Park',
                children: [
                  {
                    key: 131,
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 2 Lake Park',
                    children: [
                      {
                        key: 1311,
                        name: 'Jim Green jr.',
                        age: 25,
                        address: 'London No. 3 Lake Park',
                      },
                      {
                        key: 1312,
                        name: 'Jimmy Green sr.',
                        age: 18,
                        address: 'London No. 4 Lake Park',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 200,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            children: [
              {
                key: 201,
                name: 'Joe Green',
                age: 42,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 202,
                    name: 'Joe Green jr.',
                    age: 25,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 203,
                    name: 'Joe Green sr.',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 300,
            name: 'Jaime Black',
            age: 22,
            address: 'Sidney No. 1 Lake Park',
            children: [
              {
                key: 301,
                name: 'Jaime Green',
                age: 52,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 302,
                    name: 'Jaime Green jr.',
                    age: 21,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 303,
                    name: 'Jaime Green sr.',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 400,
            name: 'Pavel Brown',
            age: 26,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 401,
                name: 'Pavel Brown',
                age: 22,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 402,
                    name: 'Pavel Brown jr.',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 403,
                    name: 'Pavel Brown sr.',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};

export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: `Edward`,
            age: 32,
            address: `London Park no.1`,
          },
          {
            key: 2,
            name: `Alex`,
            age: 45,
            address: `London Park no.2`,
          },
          {
            key: 3,
            name: `Niko`,
            age: 21,
            address: `London Park no.3`,
          },
          {
            key: 4,
            name: `Josh`,
            age: 18,
            address: `London Park no.4`,
          },
        ],
        pagination: { ...pagination, total: 4 },
      });
    }, 1000);
  });
};
