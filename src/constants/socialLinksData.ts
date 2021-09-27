import { TwitterOutlined, LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';
import { FC } from 'react';

interface SocialLink {
  id: number;
  name: string;
  Icon: FC;
}

export const socialLinksData: SocialLink[] = [
  {
    id: 1,
    name: 'twitter',
    Icon: TwitterOutlined,
  },
  {
    id: 2,
    name: 'linkedin',
    Icon: LinkedinOutlined,
  },
  {
    id: 3,
    name: 'facebook',
    Icon: FacebookOutlined,
  },
];
