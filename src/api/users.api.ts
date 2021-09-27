export interface User {
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
}

export const getUser = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        firstName: 'Alexandr',
        lastName: 'Yaschenkov',
        imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1629465123/Ellipse_59_vls5ji.jpg',
        userName: '@alex1989',
      });
    }, 1000);
  });
};
