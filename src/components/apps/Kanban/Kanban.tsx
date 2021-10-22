import React from 'react';
import { AddCard } from './AddCard/AddCard';
import { Card } from './Card/Card';
import * as S from './Kanban.styles';

const tags = {
  intravenous: {
    title: 'Intravenous',
    bgcolor: 'green',
  },
  oral: {
    title: 'Oral',
    bgcolor: 'orange',
  },
  intramuscular: {
    title: 'Intramuscular',
    bgcolor: 'yellow',
  },
  other: {
    title: 'Other Administation Route',
    bgcolor: 'violet',
  },
  licensedEMTP: {
    title: 'Licensed for EMT-P',
    bgcolor: 'lightgreen',
  },
  licensedCCEMTP: {
    title: 'Licensed for CCEMT-P',
    bgcolor: 'pink',
  },
  licensedNONEMT: {
    title: 'Licensed for NON-EMT Care',
    bgcolor: 'blue',
  },
  licensedEMTB: {
    title: 'Licensed for EMT-B',
    bgcolor: 'skyblue',
  },
};

const { intravenous, oral, intramuscular, other, licensedEMTP, licensedCCEMTP, licensedNONEMT, licensedEMTB } = tags;

const data = {
  lanes: [
    {
      id: 'info',
      title: 'Information',
      cards: [
        { id: 'altence', title: 'Altence', description: 'Licensed Medications' },
        {
          id: 'warning',
          title: 'Warning',
          description: 'Do NOT utilize any medication that is out of your scope of practice.',
        },
      ],
    },
    {
      id: 'nutrition',
      title: 'Nutrition Medications',
      cards: [
        {
          id: 'dextrose',
          description: 'Dextrose (D50)',
          tags: [intravenous, licensedEMTP],
        },
      ],
    },
  ],
};

export const Kanban: React.FC = () => {
  return (
    <S.Kanban
      components={{ Card, NewCardForm: AddCard }}
      editable
      laneDraggable
      data={data}
      tagStyle={{ padding: '0.2rem', fontWeight: '600' }}
    />
  );
};
