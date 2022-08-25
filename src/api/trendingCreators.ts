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
          url:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/javier-miranda-fUOf_2t8vzQ-unsplash_wgqfif.webp',
          header: {
            heading: 'Florence Perez',
            subheading: 'Gold and Silver',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_3TLl_97HNJo_rxyqpa.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/mo-a9-rD_z-Je4-unsplash_c4rmi3.webp',
          header: {
            heading: 'Richard Morales',
            subheading: 'Leporalebru',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_27QcqVqgVg4_dlbok9.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/pexels-artem-podrez-7049260_1_zzntn7.mp4',
          type: 'video',
          header: {
            heading: 'May Gauthier',
            subheading: 'Pigeon',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/Rectangle_463_4_gep4lc.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/roma-kaiuk-u1vda3HaAJE-unsplash_qkeobi.webp',
          header: {
            heading: 'Christianna Buehner',
            subheading: 'Metro',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/Rectangle_463_1_d1omr2.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/pexels-rostislav-uzunov-5680034_1_oun2f5.mp4',
          type: 'video',
          header: {
            heading: 'Charles Deluvio',
            subheading: 'Render',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/Rectangle_463_3_gl0gcr.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/icarius-G8CByeV0_Bo-unsplash_dxxvhh.webp',
          header: {
            heading: 'John Bostick',
            subheading: 'Icarius',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_4_QFycgpC4c_gjlyfr.webp',
          },
          viewed: false,
        },
        {
          url:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/cash-macanaya-4OLy06seaH4-unsplash_rvjwzp.webp',
          header: {
            heading: 'Jamie Quinones',
            subheading: 'Space Shark',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_GsGs_FvQyac_d2eupa.webp',
          },
          viewed: false,
        },
        {
          url:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/shubham-dhage-WzKi0E3ZFRc-unsplash_q0vi53.webp',
          header: {
            heading: 'Richard Sapienza',
            subheading: 'Shubham Dhage',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_7rriIaBH6JY_wbcv28.webp',
          },
          viewed: false,
        },
        {
          url:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/milad-fakurian-czTJj9LWcwI-unsplash_glvqxh.webp',
          header: {
            heading: 'Steven Negrete',
            subheading: 'Milad Fakurian',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_bodgc6H44FA_jkbga8.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/mo-NhYj5-Ib7ik-unsplash_njim5c.webp',
          header: {
            heading: 'Arnold Rader',
            subheading: 'Gratuita Sobre',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_ym--mSBZ0ro_msnfti.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/daniel-olah-idednB9qCrA-unsplash_g9hihn.webp',
          header: {
            heading: 'Zelma Strange',
            subheading: 'Tube with Spirals',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_joINR2EKnvY_jxmpwr.webp',
          },
          viewed: false,
        },
        {
          url: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/pan-yunbo-EgL0EtzL0Wc-unsplash_yajkmd.webp',
          header: {
            heading: 'Helga Blank',
            subheading: 'Matterport',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/unsplash_HD8KlyWRYYM_tbjm2d.webp',
          },
          viewed: false,
        },
        {
          url:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/milad-fakurian-wNsHBf_bTBo-unsplash_j5lzpg.webp',
          header: {
            heading: 'Rihanna Ritter',
            subheading: 'Lorem Ipsum',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/Rectangle_463_2_hgqjsp.webp',
          },
          viewed: false,
        },
        {
          url:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/maryna-yazbeck-rnwDiYrHtM0-unsplash_rn3fhj.webp',
          header: {
            heading: 'Joanna Hammer',
            subheading: 'Silver',
            profileImage: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-trending/Ellipse_8_y0rdfd.webp',
          },
          viewed: false,
        },
      ]);
    }, 0);
  });
};
