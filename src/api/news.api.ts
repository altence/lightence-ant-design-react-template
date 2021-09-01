export interface Post {
  avatarUrl: string;
  author: string;
  title: string;
  date: number;
  text: string;
  img: string;
}

export const getNews = (): Promise<Post[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: '111111',
          date: 1576789200000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: '2',
          date: 1575925200000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: 1575147600000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'Arthur Conan Doyle',
          author: 'Sherlock',
          date: 1572555600000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: 1569877200000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: 1567285200000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: 1564606800000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: 1561928400000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: 1559336400000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: 1556658000000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: 1554066000000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: 1551387600000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: 1548968400000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: 1546290000000,
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
      ]);
    }, 1000);
  });
};
