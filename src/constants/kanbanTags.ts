import theme from 'styles/theme';

const { green, orange, gray, violet, lightgreen, pink, blue, skyblue } = theme.commonColors;

export const kanbanTags = {
  intravenous: {
    id: 'Intra',
    title: 'Intra',
    bgcolor: green,
  },
  oral: {
    id: 'Oral',
    title: 'Oral',
    bgcolor: orange,
  },
  intramuscular: {
    id: 'Intra2',
    title: 'Intra',
    bgcolor: gray,
  },
  other: {
    id: 'Other Administation Route',
    title: 'Other Administation Route',
    bgcolor: violet,
  },
  licensedEMTP: {
    id: 'Licensed',
    title: 'Licensed',
    bgcolor: lightgreen,
  },
  licensedCCEMTP: {
    id: 'Licensed for CCEMT-P',
    title: 'Licensed for CCEMT-P',
    bgcolor: pink,
  },
  licensedNONEMT: {
    id: 'Licensed for NON-EMT',
    title: 'Licensed for NON-EMT',
    bgcolor: blue,
  },
  licensedEMTB: {
    id: 'Licensed for EMT-B',
    title: 'Licensed for EMT-B',
    bgcolor: skyblue,
  },
};
