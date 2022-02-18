export interface TrendingCreator {
  url: string;
  type?: 'video';
  header: {
    heading: string;
    subheading: string;
    profileImage: string;
  };
  viewed: boolean;
}

export const getTrendingCreators = (): Promise<TrendingCreator[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857835/javier-miranda-fUOf_2t8vzQ-unsplash_wgqfif.jpg',
          header: {
            heading: 'Florence Perez',
            subheading: 'Gold and Silver',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831474/unsplash_3TLl_97HNJo_rxyqpa.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857835/mo-a9-rD_z-Je4-unsplash_c4rmi3.jpg',
          header: {
            heading: 'Richard Morales',
            subheading: 'Leporalebru',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831474/unsplash_27QcqVqgVg4_dlbok9.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/video/upload/v1646926409/pexels-artem-podrez-7049260_1_zzntn7.mp4',
          type: 'video',
          header: {
            heading: 'May Gauthier',
            subheading: 'Pigeon',
            profileImage: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_4_gep4lc.jpg',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646926630/roma-kaiuk-u1vda3HaAJE-unsplash_qkeobi.jpg',
          header: {
            heading: 'Christianna Buehner',
            subheading: 'Metro',
            profileImage: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_1_d1omr2.jpg',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/video/upload/v1647286752/pexels-rostislav-uzunov-5680034_1_oun2f5.mp4',
          type: 'video',
          header: {
            heading: 'Charles Deluvio',
            subheading: 'Render',
            profileImage: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436646/Rectangle_463_3_gl0gcr.jpg',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857835/icarius-G8CByeV0_Bo-unsplash_dxxvhh.jpg',
          header: {
            heading: 'John Bostick',
            subheading: 'Icarius',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831474/unsplash_4_QFycgpC4c_gjlyfr.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857836/cash-macanaya-4OLy06seaH4-unsplash_rvjwzp.jpg',
          header: {
            heading: 'Jamie Quinones',
            subheading: 'Space Shark',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831474/unsplash_GsGs_FvQyac_d2eupa.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857837/shubham-dhage-WzKi0E3ZFRc-unsplash_q0vi53.jpg',
          header: {
            heading: 'Richard Sapienza',
            subheading: 'Shubham Dhage',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831474/unsplash_7rriIaBH6JY_wbcv28.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857837/milad-fakurian-czTJj9LWcwI-unsplash_glvqxh.jpg',
          header: {
            heading: 'Steven Negrete',
            subheading: 'Milad Fakurian',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831474/unsplash_bodgc6H44FA_jkbga8.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857837/mo-NhYj5-Ib7ik-unsplash_njim5c.jpg',
          header: {
            heading: 'Arnold Rader',
            subheading: 'Gratuita Sobre',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831475/unsplash_ym--mSBZ0ro_msnfti.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857838/daniel-olah-idednB9qCrA-unsplash_g9hihn.jpg',
          header: {
            heading: 'Zelma Strange',
            subheading: 'Tube with Spirals',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831475/unsplash_joINR2EKnvY_jxmpwr.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646857939/pan-yunbo-EgL0EtzL0Wc-unsplash_yajkmd.jpg',
          header: {
            heading: 'Helga Blank',
            subheading: 'Matterport',
            profileImage:
              'https://res.cloudinary.com/lapkinthegod/image/upload/v1646831475/unsplash_HD8KlyWRYYM_tbjm2d.png',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1647285408/milad-fakurian-wNsHBf_bTBo-unsplash_j5lzpg.jpg',
          header: {
            heading: 'Rihanna Ritter',
            subheading: 'Lorem Ipsum',
            profileImage: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_2_hgqjsp.jpg',
          },
          viewed: false,
        },
        {
          url: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1647347377/maryna-yazbeck-rnwDiYrHtM0-unsplash_rn3fhj.jpg',
          header: {
            heading: 'Joanna Hammer',
            subheading: 'Silver',
            profileImage: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1644234637/Ellipse_8_y0rdfd.png',
          },
          viewed: false,
        },
      ]);
    }, 0);
  });
};
