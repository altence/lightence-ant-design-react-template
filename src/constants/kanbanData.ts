import { kanbanTags } from './kanbanTags';
import { kanbanPeople } from './kanbanPeople';

const { high, medium, low, ui, dev } = kanbanTags;
const { anna, pavel } = kanbanPeople;

export const kanbanData = {
  lanes: [
    {
      id: '1',
      title: 'Backlog',
      cards: [
        {
          id: '11',
          title: 'Scale marketing',
          description:
            'Nam augue nibh, lobortis quis velit quis, pretium ultricies ante. Aenean nisi nibh, ornare id augue id, pharetra feugiat orci.',
          tags: [high],
          participants: [anna, pavel],
        },
        {
          id: '12',
          title: 'Build a sales team',
          description:
            'Fusce facilisis massa mauris, id varius justo ornare sit amet. Vivamus ut blandit nibh. Curabitur in feugiat mi.',
          tags: [medium, dev],
          participants: [anna, pavel],
        },
        {
          id: '13',
          title: 'Explain every detail of the product',
          description:
            'Praesent eget eleifend neque, a fermentum ex. Etiam ligula tellus, fringilla lobortis ultricies at, congue id sapien. Proin ex urna, accumsan id mattis sit amet, bibendum sed neque. Suspendisse consectetur justo purus. Duis sit amet ornare risus.',
          tags: [low, dev],
          participants: [anna, pavel],
        },
      ],
    },
    {
      id: '2',
      title: 'In Progress',
      cards: [
        {
          id: '21',
          title: 'Plan the build',
          description:
            'Quisque ultricies est non orci vestibulum, et iaculis mauris euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vulputate auctor massa vehicula iaculis.',
          tags: [ui],
          participants: [anna],
        },
        {
          id: '22',
          title: 'Rich $1 billion valuation',
          description:
            'Phasellus ornare massa non cursus aliquet. Fusce pulvinar metus quis dui eleifend maximus. Proin nec libero aliquet, feugiat neque a, lobortis ipsum.',
          tags: [medium],
          participants: [anna, pavel],
        },
      ],
    },
    {
      id: '3',
      title: 'Ready for test',
      cards: [
        {
          id: '31',
          title: 'Brainstorming meetings',
          description:
            'Phasellus eu neque at dui dapibus tristique vel quis nunc. Nam eget ultrices urna, tincidunt tempus lacus. Aenean quis euismod odio, et bibendum felis.',
          tags: [dev],
          participants: [pavel],
        },
        {
          id: '32',
          title: 'Research how to crush the competition',
          description: `Etiam varius purus ut dolor ultrices, id eleifend ligula lobortis. Nunc sagittis libero id enim ultrices consequat. Fusce facilisis dui vulputate nisi malesuada, nec mollis tellus dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;`,
          tags: [low, dev],
        },
        {
          id: '33',
          title: 'Aquire funding for scaling',
          description:
            'Sed a euismod ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi venenatis sem nec est cursus, at commodo massa luctus.',
          tags: [high],
        },
      ],
    },
    {
      id: '4',
      title: 'Done',
      cards: [
        {
          id: '41',
          title: 'Finalize requirements',
          description:
            'onec dictum mauris nisi, a ultricies turpis dignissim in. Nullam eleifend mauris sed augue malesuada porttitor a nec sapien. Sed nec ex ex. Mauris tellus felis, aliquet quis nulla sit amet, venenatis pharetra mauris. Nunc felis ligula, porta nec gravida a, maximus a purus.',
          tags: [medium],
        },
        {
          id: '42',
          title: 'Reach $0.5 billion valuation',
          description: `Nam elementum dui rutrum massa consectetur volutpat. Aenean congue massa ac dictum fringilla. Quisque in nunc id ligula condimentum aliquam. Maecenas volutpat, tellus at ornare cursus, risus neque ornare erat, at euismod nisi diam a justo.`,
          tags: [low, dev],
        },
      ],
    },
  ],
};
