interface Data {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const getData = (values: Data[]): Promise<Data[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(values);
    }, 1000);
  });
};
