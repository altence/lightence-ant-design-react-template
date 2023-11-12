import { DefaultTheme } from 'styled-components';
import { NotificationType } from '@app/components/common/BaseNotification/BaseNotification';
import { Priority } from '@app//constants/enums/priorities';
import visa from '@app/assets/images/card-issuers/visa.png';
import mastercard from '@app/assets/images/card-issuers/mastercard.png';
import maestro from '@app/assets/images/card-issuers/maestro.png';
import { CurrencyTypeEnum, Severity } from '@app/interfaces/interfaces';
import { BaseBadgeProps } from '@app/components/common/BaseBadge/BaseBadge';
import { currencies } from '@app/constants/config/currencies';
import { ColorType } from '@app/styles/themes/types';

export const camelize = (string: string): string => {
  return string
    .split(' ')
    .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

export const getCurrencyPrice = (price: number | string, currency: CurrencyTypeEnum, isIcon = true): string => {
  const currencySymbol = currencies[currency][isIcon ? 'icon' : 'text'];

  return isIcon ? `${currencySymbol}${price}` : `${price} ${currencySymbol}`;
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

export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};

export const getDifference = (value: number, prevValue: number): string | null =>
  prevValue !== 0 ? `${((Math.abs(value - prevValue) / prevValue) * 100).toFixed(0)}%` : '100%';

const units = 'px';
const normalize = <T extends string | number>(value: T) =>
  typeof value === 'string' ? value : (`${value}${units}` as const);

export const normalizeProp = (prop: string | number | readonly number[] | readonly string[]): string => {
  if (typeof prop == 'number' || typeof prop == 'string') {
    return normalize(prop);
  }
  return prop.map(normalize).join(' ');
};

const colorTypeLookup = {
  ['default']: 'primary',
  ['info']: 'primary',
  ['mention']: 'primary',
  ['processing']: 'primary',
  ['undefined']: 'primary',
  [Priority.INFO]: 'primary',

  ['success']: 'success',
  [Priority.LOW]: 'success',

  ['warning']: 'warning',
  [Priority.MEDIUM]: 'warning',

  ['error']: 'error',
  [Priority.HIGH]: 'error',
} as const;

export const colorTypeFrom = (
  value: Priority | Severity | NotificationType | BaseBadgeProps['status'] | undefined,
): ColorType => colorTypeLookup[`${value}`];

type Breakpoints = keyof DefaultTheme['breakpoints'];

export const media =
  <T extends Breakpoints>(breakpoint: T) =>
  ({ theme }: { theme: DefaultTheme }) =>
    `width >= ${normalize(theme.breakpoints[breakpoint])}` as const;

export const mediaMax =
  <T extends Breakpoints>(breakpoint: T) =>
  ({ theme }: { theme: DefaultTheme }) =>
    `width < ${normalize(theme.breakpoints[breakpoint])}` as const;

export const mediaRange =
  <Lower extends Breakpoints, Upper extends Breakpoints>(lower: Lower, upper: Upper) =>
  ({ theme }: { theme: DefaultTheme }) =>
    `${normalize(theme.breakpoints[lower])} <= width < ${normalize(theme.breakpoints[upper])}` as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeBy = (a: any[], b: any[], key: string): any[] =>
  a.filter((elem) => !b.find((subElem) => subElem[key] === elem[key])).concat(b);

export const getSmoothRandom = (factor: number, start: number): number => {
  const halfEnvelope = 1 / factor / 2;
  const max = Math.min(1, start + halfEnvelope);
  const min = Math.max(0, start - halfEnvelope);

  return Math.random() * (max - min) + min;
};

export const shadeColor = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};

export const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return {
      h,
      s,
      l,
    };
  } else {
    throw new Error('Non valid HEX color');
  }
};

export const formatNumberWithCommas = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const msToH = (ms: number): number => Math.floor(ms / 3600000);

export const hToMS = (h: number): number => h * 3600000;

export const getPaymentCardTypeIcon = (type: string): string | null => {
  switch (type) {
    case 'visa':
      return visa;
    case 'mastercard':
      return mastercard;
    case 'maestro':
      return maestro;
    case 'amex':
      return 'amex';
    case 'discover':
      return 'discover';
    case 'diners':
      return 'diners';
    case 'jcb':
      return 'jcb';
    case 'unionpay':
      return 'unionpay';
    default:
      return null;
  }
};
