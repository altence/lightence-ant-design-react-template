import { kanbanTags } from './kanbanTags';
import { kanbanPeople } from './kanbanPeople';

const { high, medium, low, ui, dev } = kanbanTags;
const { anna, pavel } = kanbanPeople;

export const kanbanData = {
  lanes: [
    {
      id: 'info',
      title: 'Information',
      cards: [
        { id: 'altence', title: 'Altence', description: 'Licensed Medications', participants: [anna, pavel] },
        {
          id: 'warning',
          title: 'Warning',
          description: 'Do NOT utilize any medication that is out of your scope of practice.',
          participants: [anna, pavel],
        },
      ],
    },
    {
      id: 'nutrition',
      title: 'Nutrition Medications',
      cards: [
        {
          id: 'dextrose',
          title: 'Dextrose (D50)',
          description: 'Dextrose (D50)',
          tags: [high, dev],
          participants: [anna],
        },
        {
          id: 'glucagon',
          title: 'Glucagon',
          description: 'Glucagon',
          tags: [high, dev],
          participants: [anna, pavel],
        },
        {
          id: 'dextroseInWater',
          title: 'Dextrose',
          description: 'Dextrose 50% in Water',
          tags: [high, dev],
        },
        {
          id: 'lrs',
          title: 'LRS',
          description: 'Lactated Ringers Solution (LRS)',
          tags: [high, dev],
        },
      ],
    },
    {
      id: 'pain',
      title: 'Pain Medications',
      cards: [
        {
          id: 'acetaminophen',
          title: 'Acetaminophen',
          description: 'Acetaminophen (Tylenol)',
          tags: [medium, dev, ui],
          participants: [pavel],
        },
        {
          id: 'morphine',
          title: 'Morphine',
          description: 'Morphine',
          tags: [high, dev],
        },
        {
          id: 'ketamine',
          title: 'Ketamine',
          description: 'Ketamine',
          tags: [high, dev],
        },
        {
          id: 'fentanyl',
          title: 'Fentanyl',
          description: 'Fentanyl',
          tags: [high, dev],
        },
      ],
    },
    {
      id: 'seizure',
      title: 'Seizure & Behaviour Medications',
      cards: [
        {
          id: 'lorazepam',
          title: 'Lorazepam',
          description: 'Lorazepam (Ativan)',
          tags: [high, dev],
        },
        {
          id: 'midazolamInjection',
          title: 'Midazolam/Versed',
          description: 'Midazolam/Versed (Injection)',
          tags: [low, dev],
        },
        {
          id: 'phenytoin',
          title: 'Phenytoin',
          description: 'Phenytoin',
          tags: [high, dev],
        },
        {
          id: 'diazepam',
          title: 'Diazepam',
          description: 'Diazepam',
          tags: [high, low, dev],
        },
        {
          id: 'midazolammedium',
          title: 'medium',
          description: 'Midazolam/Versed (medium)',
          tags: [medium, dev],
        },
      ],
    },
    {
      id: 'reaction',
      title: 'Reaction Medications',
      cards: [
        {
          id: 'epinephrine',
          title: 'EpiPen',
          description: 'Epinephrine (EpiPen)',
          tags: [low, dev, ui],
        },
        {
          id: 'benadryl',
          title: 'Benadryl',
          description: 'Benadryl',
          tags: [medium, dev, ui],
        },
        {
          id: 'albuterol',
          title: 'Nebulized Albuterol',
          description: 'Nebulized Albuterol',
          tags: [ui, dev, ui],
        },
        {
          id: 'soluMedrol',
          title: 'Solu-Medrol',
          description: 'Solu-Medrol',
          tags: [high, low, dev],
        },
        {
          id: 'naloxon',
          title: 'Naloxon',
          description: 'Naloxon (Narcan)',
          tags: [high, low, ui, dev],
        },
      ],
    },
    {
      id: 'anesthetic',
      title: 'Anesthetic & Sedation Medications',
      cards: [
        {
          id: 'ketamineAnesthetic',
          title: 'Ketamine',
          description: 'Ketamine',
          tags: [high, dev],
        },
        {
          id: 'zofran',
          title: 'Zofran',
          description: 'Zofran',
          tags: [high, low, dev],
        },
        {
          id: 'propofol',
          title: 'Propofol',
          description: 'Propofol',
          tags: [high, dev],
        },
        {
          id: 'pentobarbital',
          title: 'Pentobarbital',
          description: 'Pentobarbital',
          tags: [high, low, dev],
        },
        {
          id: 'lidocaine',
          title: 'Lidocaine',
          description: 'Lidocaine',
          tags: [low, dev],
        },
      ],
    },
  ],
};
