export interface BloodTestResult {
  key: number;
  test: string;
  result: number;
  min?: number;
  max?: number;
  units: string;
  yearData: number[];
  flag: number;
}

export const results: BloodTestResult[] = [
  { test: 'WBC', result: 6.6, min: 3.4, max: 10.8, units: 'K/uL' },
  { test: 'RBC', result: 4.07, min: 4.14, max: 5.8, units: 'K/uL' },
  { test: 'Hemoglobin', result: 15.6, min: 13, max: 17.7, units: 'g/uL' },
  { test: 'Hematocrit', result: 45.5, min: 37.5, max: 51, units: '%' },
  { test: 'MCV', result: 112, min: 79, max: 97, units: 'fL' },
  { test: 'MCH', result: 38.3, min: 26.6, max: 33, units: 'pg' },
  { test: 'MCHC', result: 34.3, min: 31.5, max: 35.7, units: 'g/dL' },
  { test: 'RDW', result: 14.2, min: 12.3, max: 15.4, units: '%' },
  { test: 'Platelets', result: 256, min: 150, max: 379, units: 'K/uL' },
  { test: 'Neutrophils', result: 57, units: '%' },
  { test: 'Lymphs', result: 32, units: '%' },
  { test: 'Monocytes', result: 8, units: '%' },
  { test: 'Eos', result: 2, units: '%' },
  { test: 'Basos', result: 1, units: '%' },
  { test: 'Neutrophils (abs)', result: 3.7, min: 1.4, max: 7, units: 'K/uL' },
  { test: 'Lymphs (abs)', result: 2.1, min: 0.7, max: 3.1, units: 'K/uL' },
  { test: 'Monocytes (abs)', result: 0.5, min: 0.1, max: 0.9, units: 'K/uL' },
  { test: 'Eos (asb)', result: 0.1, min: 0, max: 0.4, units: 'K/uL' },
  { test: 'Baso (abs)', result: 0.0, min: 0, max: 0.2, units: 'K/uL' },
  { test: 'Immature Granulocytes', result: 0, units: '%' },
  { test: 'Immature Gran (abs)', result: 0.0, min: 0, max: 0.1, units: 'K/uL' },
]
  .map((result, index) => ({ ...result, key: index }))
  .map(({ result, ...rest }) => ({
    ...rest,
    result,
    yearData: Array(12)
      .fill(null)
      .map(() => result * Math.abs(Math.sin(Math.random() * result))),
  }))
  .map(({ result, min, max, ...rest }) => {
    let flag = 0;
    if (min !== undefined && max !== undefined) {
      if (result < min) {
        flag = 1;
      } else if (result > max) {
        flag = 2;
      }
    }
    return { ...rest, result, min, max, flag };
  });

export const flags = [
  'medical-dashboard.bloodScreening.norm',
  'medical-dashboard.bloodScreening.low',
  'medical-dashboard.bloodScreening.high',
];
