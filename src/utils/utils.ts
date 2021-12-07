export const camelize = (string: string): string => {
  return string
    .split(' ')
    .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

export const getCurrencyPrice = (price: number, currency: string): string => {
  switch (currency) {
    case 'USD': {
      return `$${price}`;
    }

    default: {
      return `$${price}`;
    }
  }
};

type MarkArea = {
  xAxis: number;
};

export const getMarkAreaData = (data: string[] | number[]): MarkArea[][] =>
  data.map((el, index) => [
    {
      xAxis: 2 * index,
    },
    {
      xAxis: 2 * index + 1,
    },
  ]);

export const capitalize = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`;

export const hexToRGB = (hex: string, alpha: string | number): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export const getDifference = (value: number, prevValue: number): string | null =>
  prevValue !== 0 ? `${((Math.abs(value - prevValue) / prevValue) * 100).toFixed(0)}%` : '100%';

export const getValueFromProp = (prop: string | number | [number, number]): string =>
  typeof prop === 'number' ? `${prop}px` : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeBy = (a: any[], b: any[], key: string): any[] =>
  a.filter((elem) => !b.find((subElem) => subElem[key] === elem[key])).concat(b);
