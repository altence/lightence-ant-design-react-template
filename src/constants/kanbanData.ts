import { kanbanTags } from './kanbanTags';

const { intravenous, oral, intramuscular, other, licensedEMTP, licensedCCEMTP, licensedNONEMT, licensedEMTB } =
  kanbanTags;

export const kanbanData = {
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
          title: 'Dextrose (D50)',
          description: 'Dextrose (D50)',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'glucagon',
          title: 'Glucagon',
          description: 'Glucagon',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'dextroseInWater',
          title: 'Dextrose',
          description: 'Dextrose 50% in Water',
          tags: [intravenous, licensedCCEMTP],
        },
        {
          id: 'lrs',
          title: 'LRS',
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
          title: 'Acetaminophen',
          description: 'Acetaminophen (Tylenol)',
          tags: [oral, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'morphine',
          title: 'Morphine',
          description: 'Morphine',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'ketamine',
          title: 'Ketamine',
          description: 'Ketamine',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'fentanyl',
          title: 'Fentanyl',
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
          title: 'Lorazepam',
          description: 'Lorazepam (Ativan)',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'midazolamInjection',
          title: 'Midazolam/Versed',
          description: 'Midazolam/Versed (Injection)',
          tags: [intramuscular, licensedEMTP],
        },
        {
          id: 'phenytoin',
          title: 'Phenytoin',
          description: 'Phenytoin',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'diazepam',
          title: 'Diazepam',
          description: 'Diazepam',
          tags: [intravenous, intramuscular, licensedEMTP],
        },
        {
          id: 'midazolamOral',
          title: 'Oral',
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
          title: 'EpiPen',
          description: 'Epinephrine (EpiPen)',
          tags: [intramuscular, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'benadryl',
          title: 'Benadryl',
          description: 'Benadryl',
          tags: [oral, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'albuterol',
          title: 'Nebulized Albuterol',
          description: 'Nebulized Albuterol',
          tags: [other, licensedNONEMT, licensedEMTB],
        },
        {
          id: 'soluMedrol',
          title: 'Solu-Medrol',
          description: 'Solu-Medrol',
          tags: [intravenous, intramuscular, licensedEMTP],
        },
        {
          id: 'naloxon',
          title: 'Naloxon',
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
          title: 'Ketamine',
          description: 'Ketamine',
          tags: [intravenous, licensedEMTP],
        },
        {
          id: 'zofran',
          title: 'Zofran',
          description: 'Zofran',
          tags: [intravenous, intramuscular, licensedEMTP],
        },
        {
          id: 'propofol',
          title: 'Propofol',
          description: 'Propofol',
          tags: [intravenous, licensedCCEMTP],
        },
        {
          id: 'pentobarbital',
          title: 'Pentobarbital',
          description: 'Pentobarbital',
          tags: [intravenous, intramuscular, licensedCCEMTP],
        },
        {
          id: 'lidocaine',
          title: 'Lidocaine',
          description: 'Lidocaine',
          tags: [intramuscular, licensedCCEMTP],
        },
      ],
    },
  ],
};
