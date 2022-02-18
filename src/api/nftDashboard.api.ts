import birthOfUniverse from '@app/assets/images/nft/nft/borth-of-universe.png';
import starAway from '@app/assets/images/nft/nft/star-away.png';
import nightDeprivation from '@app/assets/images/nft/nft/night-deprivation.png';

export interface NftItem {
  image: string;
  title: string;
  author: string;
  currentBid: number;
  currentBidCrypto: number;
}

export const getRecentlyAddedNfts = (): Promise<NftItem[]> => {
  return new Promise((res) => {
    res([
      {
        image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646942362/ezgif.com-gif-maker_1_na4ogi.gif',
        title: 'XCopy Humano',
        author: 'neithanwolf',
        currentBid: 3521,
        currentBidCrypto: 1.63,
      },
      {
        image: birthOfUniverse,
        title: 'Borth of Universe',
        author: 'jakeparker',
        currentBid: 3150,
        currentBidCrypto: 1.02,
      },
      {
        image: starAway,
        title: 'Star Away',
        author: 'nick_johnson',
        currentBid: 7210,
        currentBidCrypto: 2.08,
      },
      {
        image: nightDeprivation,
        title: 'Night Deprivation',
        author: 'mikeAdamson',
        currentBid: 740,
        currentBidCrypto: 1.56,
      },
      {
        image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646942358/ezgif.com-gif-maker_t2caul.gif',
        title: 'Spiral Hole',
        author: 'jo_wo_le',
        currentBid: 311,
        currentBidCrypto: 1.04,
      },
    ]);
  });
};
