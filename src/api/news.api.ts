export interface Post {
  avatarUrl: string;
  author: string;
  title: string;
  date: string;
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
          date: '1576789200',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: '2',
          date: '1575925200',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: '1575147600',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'Arthur Conan Doyle',
          author: 'Sherlock',
          date: '1572555600',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: '1569877200',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: '1567285200',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: '1564606800',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: '1561928400',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: '1559336400',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: '1556658000',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: '1554066000',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: '1551387600',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Watson',
          title: 'Arthur Conan Doyle',
          date: '1548968400',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
        {
          avatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          author: 'Sherlock',
          title: 'Arthur Conan Doyle',
          date: '1546290000',
          text: 'Look at my new book',
          img: 'https://149359143.v2.pressablecdn.com/wp-content/uploads/2009/12/Sherlock_Holmes_Museum.jpg',
        },
      ]);
    }, 1000);
  });
};
