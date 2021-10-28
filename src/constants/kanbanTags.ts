import theme from 'styles/theme';

const { green, orange, gray, violet, lightgreen, pink, blue, skyblue } = theme.commonColors;

export const kanbanTags = {
  intravenous: {
    title: 'Intravenous',
    bgcolor: green,
  },
  oral: {
    title: 'Oral',
    bgcolor: orange,
  },
  intramuscular: {
    title: 'Intramuscular',
    bgcolor: gray,
  },
  other: {
    title: 'Other Administation Route',
    bgcolor: violet,
  },
  licensedEMTP: {
    title: 'Licensed for EMT-P',
    bgcolor: lightgreen,
  },
  licensedCCEMTP: {
    title: 'Licensed for CCEMT-P',
    bgcolor: pink,
  },
  licensedNONEMT: {
    title: 'Licensed for NON-EMT Care',
    bgcolor: blue,
  },
  licensedEMTB: {
    title: 'Licensed for EMT-B',
    bgcolor: skyblue,
  },
};
