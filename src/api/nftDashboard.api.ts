import birthOfUniverse from '@app/assets/images/nft/nft/borth-of-universe.png';
import starAway from '@app/assets/images/nft/nft/star-away.png';
import nightDeprivation from '@app/assets/images/nft/nft/night-deprivation.png';

export interface NftItem {
  image: string;
  title: string;
  author: string;
  currentBid: string;
  currentBidCrypto: string;
}

export const getRecentlyAddedNfts = (): Promise<NftItem[]> => {
  return new Promise((res) => {
    res([
      {
        image: birthOfUniverse,
        title: 'Borth of Universe',
        author: 'jakeparker',
        currentBid: '3,150',
        currentBidCrypto: '1,02',
      },
      {
        image: starAway,
        title: 'Star Away',
        author: 'nick_johnson',
        currentBid: '7,210',
        currentBidCrypto: '2,08',
      },
      {
        image: nightDeprivation,
        title: 'Night Deprivation',
        author: 'mikeAdamson',
        currentBid: '740',
        currentBidCrypto: '1,56',
      },
    ]);
  });
};
