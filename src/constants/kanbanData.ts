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
        {
          id: 'altence',
          title: 'Altence',
          description: 'Licensed Medications',
          tags: [high, dev],
          participants: [anna, pavel],
        },
        {
          id: 'warning',
          title: 'Warning',
          description: 'Do NOT utilize any medication that is out of your scope of practice.',
          tags: [high, dev],
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
          description:
            'Dextrose is the name of a simple sugar that is made from corn and is chemically identical to glucose, or blood sugar. (D50)',
          tags: [high, dev],
          participants: [anna],
        },
        {
          id: 'glucagon',
          title: 'Glucagon',
          description:
            'Glucagon is a peptide hormone, produced by alpha cells of the pancreas. It raises concentration of glucose and fatty acids in the bloodstream, and is considered to be the main catabolic hormone of the body.',
          tags: [high, dev],
          participants: [anna, pavel],
        },
        {
          id: 'dextroseInWater',
          title: 'Dextrose',
          description:
            'Dextrose is the name of a simple sugar that is made from corn and is chemically identical to glucose, or blood sugar. (D50)',
          tags: [high, dev],
        },
        {
          id: 'lrs',
          title: 'LRS',
          description: `Ringer's lactate solution (RL), also known as sodium lactate solution and Hartmann's solution, is a mixture of sodium chloride, sodium lactate, potassium chloride, and calcium chloride in water.`,
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
          description:
            'cetaminophen is used to treat mild to moderate and pain, to treat moderate to severe pain in conjunction with opiates, or to reduce fever. Common conditions treated include headache, muscle aches, arthritis, backache, toothaches, sore throat, colds, flu, and fevers.',
          tags: [medium, dev, ui],
          participants: [pavel],
        },
        {
          id: 'morphine',
          title: 'Morphine',
          description: `Morphine is an opioid medication. An opioid is sometimes called a narcotic. Morphine works by blocking pain signals from travelling along the nerves to the brain.
          Morphine is used to treat moderate to severe pain. The extended-release form of morphine is for around-the-clock treatment of pain. Short-acting formulations are taken as needed for pain.`,
          tags: [high, dev],
        },
        {
          id: 'ketamine',
          title: 'Ketamine',
          description:
            'Ketamine got its start in Belgium in the 1960s as an anesthesia medicine for animals. The FDA approved it as an anesthetic for people in 1970. It was used in treating injured soldiers on the battlefields in the Vietnam War. Unlike other anesthetics, ketamine doesn’t slow breathing or heart rate, so patients don’t need to be on a ventilator to receive it.',
          tags: [high, dev],
        },
        {
          id: 'fentanyl',
          title: 'Fentanyl',
          description:
            'Fentanyl, also spelled fentanil, is a powerful opioid used as a pain medication and, together with other medications, for anesthesia.[3] It is also used as a recreational drug, sometimes mixed with heroin, cocaine, or methamphetamine, and its potentially deadly overdose effects can be neutralized by naloxone.[5] Fentanyl is commonly used to create counterfeit drugs marketed as OxyContin, Xanax, Adderall, and other pills. It has a rapid onset and its effects generally last under two hours.[3] Medically, it is used by injection, nasal spray, or skin patch, or absorbed through the cheek as a lozenge or tablet.',
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
          description:
            'This medication is used to treat anxiety. Lorazepam belongs to a class of drugs known as benzodiazepines which act on the brain and nerves (central nervous system) to produce a calming effect. This drug works by enhancing the effects of a certain natural chemical in the body (GABA).',
          tags: [high, dev],
        },
        {
          id: 'midazolamInjection',
          title: 'Midazolam/Versed',
          description: `Midazolam is a benzodiazepine (ben-zoe-dye-AZE-eh-peen) that is used to sedate a person who is having a minor surgery, dental work, or other medical procedure.
          Midazolam may also be used for purposes not listed in this medication guide.`,
          tags: [low, dev],
        },
        {
          id: 'phenytoin',
          title: 'Phenytoin',
          description: `Phenytoin is an anti-epileptic drug, also called an anticonvulsant. Phenytoin works by slowing down impulses in the brain that cause seizures.
          Phenytoin is used to control seizures. It does not treat all types of seizures, and your doctor will determine if it is the right medicine for you.`,
          tags: [high, dev],
        },
        {
          id: 'diazepam',
          title: 'Diazepam',
          description: `Diazepam is a benzodiazepine (ben-zoe-dye-AZE-eh-peen)). It is thought that benzodiazepines work by enhancing the activity of certain neurotransmitters in the brain.
          Diazepam is used to treat anxiety disorders, alcohol withdrawal symptoms, or muscle spasms and stiffness.
          Diazepam is sometimes used with other medications to treat seizures.`,
          tags: [high, low, dev],
        },
        {
          id: 'midazolammedium',
          title: 'Midazolam',
          description: `Midazolam is a benzodiazepine (ben-zoe-dye-AZE-eh-peen) that is used to sedate a person who is having a minor surgery, dental work, or other medical procedure.
          Midazolam may also be used for purposes not listed in this medication guide.`,
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
          description:
            'EpiPen is the brand name of an auto-injectable device that delivers the drug epinephrine. It is a life-saving medication used when someone is experiencing a severe allergic reaction, known as anaphylaxis.',
          tags: [low, dev, ui],
        },
        {
          id: 'benadryl',
          title: 'Benadryl',
          description:
            'BENADRYL® (diphenhydramine) should only be used as directed by the label. Abuse or misuse of this product can lead to serious side effects with potentially long-lasting or even life-threatening consequences. All medications should be kept out of the reach of children at all times.',
          tags: [medium, dev, ui],
        },
        {
          id: 'albuterol',
          title: 'Nebulized Albuterol',
          description:
            'An albuterol nebulizer relieves muscle tightening in the airways to help a person breathe more easily. The nebulizer turns liquid medicine into a mist, helping it reach the lungs faster.',
          tags: [ui, dev],
        },
        {
          id: 'soluMedrol',
          title: 'Solu-Medrol',
          description:
            'SOLU-MEDROL may be administered by intravenous or intramuscular injection or by intravenous infusion, the preferred method for initial emergency use being intravenous injection. To administer by intravenous (or intramuscular) injection, prepare solution as directed.',
          tags: [high, low, dev],
        },
        {
          id: 'naloxon',
          title: 'Naloxon',
          description:
            'Naloxon ist ein Notfallmedikament, das bei einer akuten Vergiftung mit Opioiden eingesetzt wird. Opioide wie Heroin wirken betäubend auf das Nervensystem, in dem sie an den Opioid-Rezeptoren binden. Auch die Steuerung der Atmung ist davon betroffen. Bei einer Überdosis mit Opioiden wird die Atmung immer flacher bis sie ganz aussetzt. Konsumierende sterben am Atemstillstand. Der Wirkstoff Naloxon ist ein so genannter Opioid-Antagonist, also ein Gegenspieler von Opioiden. Es verdrängt Opioide von den Rezeptoren und hebt die Atemlähmung auf.',
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
          description:
            'Ketamine got its start in Belgium in the 1960s as an anesthesia medicine for animals. The FDA approved it as an anesthetic for people in 1970. It was used in treating injured soldiers on the battlefields in the Vietnam War. Unlike other anesthetics, ketamine doesn’t slow breathing or heart rate, so patients don’t need to be on a ventilator to receive it.',
          tags: [high, dev],
        },
        {
          id: 'zofran',
          title: 'Zofran',
          description: `Zofran (ondansetron) blocks the actions of chemicals in the body that can trigger nausea and vomiting.
          Zofran is used to prevent nausea and vomiting that may be caused by surgery, cancer chemotherapy, or radiation treatment.
          Zofran may be used for purposes not listed in this medication guide.`,
          tags: [high, low, dev],
        },
        {
          id: 'propofol',
          title: 'Propofol',
          description: `Propofol (Diprivan) slows the activity of your brain and nervous system.
          Propofol is used to put you to sleep and keep you asleep during general anesthesia for surgery or other medical procedures. It is used in adults as well as children 2 months and older.
          Propofol is also used to sedate a patient who is under critical care and needs a mechanical ventilator (breathing machine).`,
          tags: [high, dev],
        },
        {
          id: 'pentobarbital',
          title: 'Pentobarbital',
          description: `Pentobarbital is used short-term as a sedative to treat insomnia, or to cause you to fall asleep for surgery. Pentobarbital is also used as an emergency treatment for seizures.
          Pentobarbital may also be used for purposes not listed in this medication guide.`,
          tags: [high, low, dev],
        },
        {
          id: 'lidocaine',
          title: 'Lidocaine',
          description: 'Lidocaine is a local anesthetic used in a wide variety of superficial and invasive procedures.',
          tags: [low, dev],
        },
      ],
    },
  ],
};
