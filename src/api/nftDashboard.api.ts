import nft from '@app/assets/images/nft/nft/nft-image.png';

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
        image: nft,
        title: 'Birth of Universe',
        author: 'jakeparker',
        currentBid: '3,150',
        currentBidCrypto: '1,02',
      },
    ]);
  });
};
