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
        image: process.env.REACT_APP_ASSETS_BUCKET + '/recently-added/ezgif.com-gif-maker_1_na4ogi.gif',
        title: 'XCopy Humano',
        author: 'neithanwolf',
        currentBid: 3521,
        currentBidCrypto: 1.63,
      },
      {
        image: process.env.REACT_APP_ASSETS_BUCKET + '/recently-added/borth-of-universe.webp',
        title: 'Borth of Universe',
        author: 'jakeparker',
        currentBid: 3150,
        currentBidCrypto: 1.02,
      },
      {
        image: process.env.REACT_APP_ASSETS_BUCKET + '/recently-added/star-away.webp',
        title: 'Star Away',
        author: 'nick_johnson',
        currentBid: 7210,
        currentBidCrypto: 2.08,
      },
      {
        image: process.env.REACT_APP_ASSETS_BUCKET + '/recently-added/night-deprivation.webp',
        title: 'Night Deprivation',
        author: 'mikeAdamson',
        currentBid: 740,
        currentBidCrypto: 1.56,
      },
      {
        image: process.env.REACT_APP_ASSETS_BUCKET + '/recently-added/ezgif.com-gif-maker_t2caul.gif',
        title: 'Spiral Hole',
        author: 'jo_wo_le',
        currentBid: 311,
        currentBidCrypto: 1.04,
      },
    ]);
  });
};
