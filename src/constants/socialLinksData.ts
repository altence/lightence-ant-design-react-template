import { TwitterOutlined } from '@ant-design/icons';
import { FacebookIcon } from 'components/common/icons/FacebookIcon';
import { LinkedinIcon } from 'components/common/icons/LinkedinIcon';
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
    Icon: LinkedinIcon,
  },
  {
    id: 3,
    name: 'facebook',
    Icon: FacebookIcon,
  },
];
