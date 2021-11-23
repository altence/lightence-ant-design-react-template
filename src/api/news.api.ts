import { newsTags } from 'constants/newsTags';
import { ITag } from 'components/common/Tag/Tag';
import avatar1 from 'assets/avatars/avatar1.png';
import avatar2 from 'assets/avatars/avatar2.png';
import avatar3 from 'assets/avatars/avatar3.png';
import avatar4 from 'assets/avatars/avatar4.png';

export interface Post {
  avatarUrl: string;
  author: string;
  title: string;
  date: number;
  text: string;
  img: string;
  tags: Array<ITag>;
}

const { arts, music, health } = newsTags;

export const getNews = (): Promise<Post[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          avatarUrl: avatar1,
          author: 'Dr. Dan Reed',
          title: 'Lorem ipsum dolor sit amet',
          date: 1576789200000,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus mauris ac mi efficitur, eu venenatis metus mattis. Aenean sit amet imperdiet dui. Sed vel lacinia tellus, vel ornare leo. Duis massa turpis, bibendum nec consectetur non, imperdiet vitae est. Aenean vestibulum non dui in vehicula. Fusce ex velit, iaculis in urna sit amet, congue fringilla orci. Phasellus vitae augue justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt lobortis est sit amet porta.',
          img: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg',
          tags: [arts],
        },
        {
          avatarUrl: avatar2,
          author: 'Jordan Howard',
          title: 'Morbi convallis',
          date: 1575925200000,
          text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed sodales erat. Fusce lobortis, dolor vel porttitor porttitor, ipsum lorem pulvinar nunc, ac vestibulum est risus vel turpis. Vestibulum et vestibulum est, vitae placerat lectus. Maecenas arcu sem, congue id metus non, ultricies egestas purus. Integer ut sagittis eros, in posuere arcu. Integer malesuada sapien libero, iaculis hendrerit enim egestas sit amet. In sed sapien in lorem pulvinar sollicitudin. In hendrerit magna felis, vitae fringilla magna imperdiet sed. Nam urna est, feugiat vitae odio tincidunt, lobortis auctor eros. Sed dapibus, nunc eu posuere porta, lectus tellus ornare velit, eu congue orci diam ac lorem. Integer lorem purus, dictum et aliquet finibus, consequat ac metus. Mauris tempor mattis mattis. Ut a porttitor urna. Nullam congue imperdiet tincidunt.',
          img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
          tags: [arts, health],
        },
        {
          avatarUrl: avatar3,
          author: 'Jack Hannah',
          title: 'Sed sed sodales erat',
          date: 1575147600000,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum luctus bibendum tempus. Curabitur lacinia justo vitae egestas aliquet. Morbi convallis congue felis, eu pulvinar nulla finibus in. Praesent imperdiet velit nibh, consectetur varius ipsum mattis non. Maecenas dictum, nunc at vestibulum pulvinar, velit ipsum sodales ex, id vehicula felis velit ut quam. Curabitur vulputate commodo sapien ac facilisis. Praesent erat eros, porta ut faucibus eget, rhoncus quis nisi. Suspendisse potenti. Sed rhoncus, ex eu condimentum finibus, lacus ex bibendum orci, sit amet volutpat lacus lacus sit amet lorem. Donec laoreet eros at mollis tincidunt. Maecenas lectus velit, efficitur non dictum sed, fringilla ut lacus. In at placerat lorem, quis elementum dui. Cras urna nisi, luctus ut urna id, placerat eleifend tellus. Donec tempor purus est, non dictum nibh suscipit non.',
          img: 'https://images.picxy.com/cache/2019/10/6/0bca60f406919721cf446d0db958b300.jpg',
          tags: [health],
        },
        {
          avatarUrl: avatar4,
          title: 'Integer a nisl nisl',
          author: 'Colin Falls',
          date: 1572555600000,
          text: 'Integer a nisl nisl. Cras lobortis, velit vitae vulputate mollis, sem est gravida nisl, in dapibus tellus lacus quis elit. Sed non tellus facilisis, lobortis purus a, auctor lorem. Donec maximus volutpat odio, ut vulputate mi porta eget. Donec ac interdum massa, non maximus ipsum. Etiam porttitor a turpis nec ultricies. Etiam porttitor dui non leo lobortis aliquet.',
          img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
          tags: [music, health],
        },
        {
          avatarUrl: avatar1,
          author: 'Dr. Dan Reed',
          title: 'Mauris non fermentum justo',
          date: 1569877200000,
          text: 'Mauris non fermentum justo. Ut iaculis lacinia faucibus. Pellentesque nec leo id ligula ultrices lacinia in sit amet mi. Nullam magna tortor, ultrices et pretium sed, finibus in nisi. Suspendisse finibus quam eu justo fermentum volutpat. Aenean at molestie ligula. Pellentesque egestas luctus feugiat. Sed auctor convallis orci sit amet dictum. Nulla semper faucibus arcu ut sodales. Aenean ut eros sed nulla posuere imperdiet nec vitae quam. Nunc tincidunt faucibus enim. Ut pharetra malesuada lacus in faucibus.',
          img: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=560&h=200',
          tags: [arts],
        },
        {
          avatarUrl: avatar2,
          author: 'Jordan Howard',
          title: 'In sem sapien',
          date: 1567285200000,
          text: 'Phasellus dapibus massa at felis vehicula, id dictum leo eleifend. Vivamus luctus felis semper arcu tempus pretium. Aliquam erat volutpat. Proin venenatis cursus nisl, vel dapibus felis imperdiet sed. Nam ac suscipit justo. Nullam et rutrum ante. Nam at orci et mi scelerisque sagittis a eget mauris.',
          img: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
          tags: [arts],
        },
        {
          avatarUrl: avatar3,
          author: 'Jack Hannah',
          title: 'Nam ac suscipit justo',
          date: 1564606800000,
          text: 'In sem sapien, auctor non diam vel, tincidunt ornare mi. Mauris urna leo, aliquet id justo vitae, malesuada varius massa. Sed sodales, ligula ac congue luctus, purus justo commodo sapien, vel mollis mauris turpis vel est. In ut sem dignissim, congue ante et, facilisis ante. Pellentesque dignissim enim a est bibendum mollis. Vestibulum suscipit eu lacus eget venenatis. Duis eu metus eleifend, elementum lorem eu, semper tellus. Cras euismod risus a lobortis tincidunt.',
          img: 'https://thumbs.dreamstime.com/b/%D0%B4%D0%B5%D0%BD%D1%8C-%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8-%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B0%D1%8E%D1%89%D0%B5%D0%B9-%D1%81%D1%80%D0%B5%D0%B4%D1%8B-%D0%B2-%D1%80%D1%83%D0%BA%D0%B0%D1%85-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D0%B5%D0%B2-%D1%80%D0%B0%D1%81%D1%82%D1%8F-%D1%81%D0%B0%D0%B6%D0%B5%D0%BD%D1%86%D1%8B-bokeh-130247647.jpg',
          tags: [arts, health],
        },
        {
          avatarUrl: avatar4,
          author: 'Colin Falls',
          title: 'Aliquam sollicitudin',
          date: 1561928400000,
          text: 'Pellentesque tempor sem a dictum dignissim. Vestibulum dapibus et est vehicula posuere. Sed pretium sem eget massa porta sollicitudin. Duis malesuada neque lorem, sit amet molestie tortor volutpat nec. Sed et rhoncus lacus, ut eleifend nibh. Aliquam euismod justo eu euismod pretium. Etiam rhoncus sapien vitae justo porttitor lobortis. Pellentesque vitae vehicula nibh, nec tristique leo. Praesent in orci sapien. Duis nisi risus, commodo pulvinar vulputate sollicitudin, viverra ac metus.',
          img: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
          tags: [arts, music],
        },
        {
          avatarUrl: avatar2,
          author: 'Jordan Howard',
          title: 'Suspendisse mauris leo',
          date: 1559336400000,
          text: 'Morbi et mauris quis nibh congue rutrum id eget leo. Integer venenatis sollicitudin nisl vitae ornare. Integer ullamcorper sapien eu justo porttitor tincidunt id nec elit. Aliquam sollicitudin, quam at convallis consectetur, lectus mauris euismod sapien, vel porttitor dolor velit quis lorem. Nunc elementum, ante id vulputate consectetur, erat sem rutrum odio, eget laoreet nunc lorem ut metus. Maecenas aliquet, tellus et dapibus viverra, mauris turpis mollis lorem, quis dignissim ante nibh id tortor. Nullam hendrerit, ipsum sit amet molestie mattis, enim sapien cursus elit, ut gravida massa arcu sed ex.',
          img: 'https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg?fit=fill&w=840&h=350',
          tags: [arts, music],
        },
        {
          avatarUrl: avatar4,
          author: 'Colin Falls',
          title: 'Nunc semper mauris magna',
          date: 1556658000000,
          text: 'Integer faucibus arcu in risus molestie commodo. Fusce vitae turpis tempus, dapibus enim a, rhoncus odio. In semper enim et dolor sollicitudin, viverra facilisis justo egestas. Aenean orci risus, malesuada ac tincidunt ultricies, egestas vitae mi. Praesent eget quam venenatis, dictum massa sit amet, dignissim lorem. Sed mauris purus, imperdiet quis feugiat in, egestas ut est. Nullam et turpis sit amet nibh iaculis mattis vitae eu risus. Morbi in eleifend augue, id aliquam erat. Etiam feugiat blandit diam, at porttitor mi lobortis ut. Donec finibus sagittis sem, at tincidunt lacus interdum vel. Nunc eget auctor sapien. Nulla luctus vestibulum accumsan. Mauris feugiat id lorem eu porta.',
          img: 'https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png',
          tags: [arts, music],
        },
        {
          avatarUrl: avatar3,
          author: 'Jack Hannah',
          title: 'Vestibulum non magna nulla',
          date: 1554066000000,
          text: 'Nunc semper mauris magna, sed suscipit justo pharetra eget. Nam porttitor gravida facilisis. Phasellus placerat felis sed ultricies volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vulputate orci nec vulputate tempor. Praesent arcu elit, facilisis eget tempor quis, aliquet sed turpis. Aenean venenatis rhoncus magna quis semper.',
          img: 'https://www.technipages.com/wp-content/uploads/2019/07/Cover-600x371.jpg',
          tags: [arts, health],
        },
        {
          avatarUrl: avatar2,
          author: 'Jordan Howard',
          title: 'Quisque nunc sapien',
          date: 1551387600000,
          text: 'Ut faucibus sodales nunc, vitae egestas sem dapibus in. Nulla ante lacus, finibus non facilisis sit amet, pellentesque et ex. Fusce eget dui congue, efficitur sem vulputate, sodales diam. Pellentesque gravida ex ut dictum commodo. Duis eget congue urna. Donec id sollicitudin magna, eu cursus diam. Aliquam feugiat ex eros, vel viverra magna euismod eget. Donec vitae lobortis risus. Aliquam molestie condimentum enim eu dignissim. Proin sed molestie mi.',
          img: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg',
          tags: [music],
        },
        {
          avatarUrl: avatar3,
          author: 'Jack Hannah',
          title: 'Aliquam feugiat ex eros',
          date: 1548968400000,
          text: 'Quisque nunc sapien, varius id libero eget, fringilla suscipit mi. Vivamus at fermentum nisl. Sed ultricies erat sit amet sem vestibulum gravida. Sed auctor nisl tellus, nec lobortis risus feugiat et. Mauris vitae risus vestibulum quam accumsan dictum. Vivamus vulputate sapien turpis, sit amet laoreet turpis porta eget. Donec ac elit sit amet risus lacinia ullamcorper. Sed at rhoncus neque, vel porttitor odio. Aenean ac semper justo, in tristique nibh. Vestibulum viverra sollicitudin ultricies. Nullam blandit nulla dolor, sit amet rutrum magna porta et. Phasellus id risus felis. Curabitur non velit sagittis, blandit ligula a, luctus enim. Cras lacinia diam nec mi vulputate facilisis sit amet ac purus.',
          img: 'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
          tags: [music],
        },
        {
          avatarUrl: avatar4,
          author: 'Colin Falls',
          title: 'Donec interdum mauris',
          date: 1546290000000,
          text: 'In egestas metus nibh, ac tincidunt lacus bibendum eget. Fusce pretium nulla ac arcu dictum feugiat. Pellentesque fringilla est ultrices laoreet convallis. Phasellus vitae turpis mollis, vehicula mauris sodales, laoreet quam. Etiam vestibulum semper quam et rutrum. Integer molestie dui quis justo blandit, at varius magna viverra. Nam placerat sodales aliquam. Pellentesque rutrum, ex eu sagittis lacinia, ipsum libero condimentum urna, semper gravida velit arcu et massa. Mauris iaculis turpis at lectus sagittis, nec volutpat lectus bibendum. Vivamus commodo eget orci quis tincidunt.',
          img: 'http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg',
          tags: [music, health],
        },
      ]);
    }, 1000);
  });
};
