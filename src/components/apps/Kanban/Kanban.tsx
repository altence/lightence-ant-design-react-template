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
        {
          id: 'glucagon',
          description: 'Glucagon',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'dextroseInWater',
          description: 'Dextrose 50% in Water',
          tags: [intravenous, licensedCCEMTP],
        },
        {
          id: 'lrs',
          description: 'Lactated Ringers Solution (LRS)',
          tags: [intravenous, licensedCCEMTP],
        },
      ],
    },
    {
      id: 'pain',
      title: 'Pain Medications',
      cards: [
        {
          id: 'acetaminophen',
          description: 'Acetaminophen (Tylenol)',
          tags: [oral, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'morphine',
          description: 'Morphine',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'ketamine',
          description: 'Ketamine',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'fentanyl',
          description: 'Fentanyl',
          tags: [intravenous, licensedCCEMTP],
        },
      ],
    },
    {
      id: 'seizure',
      title: 'Seizure & Behaviour Medications',
      cards: [
        {
          id: 'lorazepam',
          description: 'Lorazepam (Ativan)',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'midazolamInjection',
          description: 'Midazolam/Versed (Injection)',
          tags: [intramuscular, licensedEMTP],
        },
        {
          id: 'phenytoin',
          description: 'Phenytoin',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'diazepam',
          description: 'Diazepam',
          tags: [intravenous, intramuscular, licensedEMTP],
        },
        {
          id: 'midazolamOral',
          description: 'Midazolam/Versed (Oral)',
          tags: [oral, licensedCCEMTP],
        },
      ],
    },
    {
      id: 'reaction',
      title: 'Reaction Medications',
      cards: [
        {
          id: 'epinephrine',
          description: 'Epinephrine (EpiPen)',
          tags: [intramuscular, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'benadryl',
          description: 'Benadryl',
          tags: [oral, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'albuterol',
          description: 'Nebulized Albuterol',
          tags: [other, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'soluMedrol',
          description: 'Solu-Medrol',
          tags: [intravenous, intramuscular, licensedEMTP],
        },
        {
          id: 'naloxon',
          description: 'Naloxon (Narcan)',
          tags: [intravenous, intramuscular, other, licensedEMTP],
        },
      ],
    },
    {
      id: 'anesthetic',
      title: 'Anesthetic & Sedation Medications',
      cards: [
        {
          id: 'ketamineAnesthetic',
          description: 'Ketamine',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'zofran',
          description: 'Zofran',
          tags: [intravenous, intramuscular, licensedEMTP],
        },
        {
          id: 'propofol',
          description: 'Propofol',
          tags: [intravenous, licensedCCEMTP],
        },
        {
          id: 'pentobarbital',
          description: 'Pentobarbital',
          tags: [intravenous, intramuscular, licensedCCEMTP],
        },
        {
          id: 'lidocaine',
          description: 'Lidocaine',
          tags: [intramuscular, licensedCCEMTP],
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
