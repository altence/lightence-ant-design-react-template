type MarkArea = {
  xAxis: number;
};

export const getMarkAreaData = (data: string[] | number[]): MarkArea[][] => {
  const result = [];

  for (let i = 1; i <= data.length; i++) {
    result.push([
      {
        xAxis: i,
      },
      {
        xAxis: i + 1,
      },
    ]);

    i++;
  }

  return result;
};
