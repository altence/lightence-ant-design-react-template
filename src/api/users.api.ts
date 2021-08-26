export interface User {
  name: string;
  imgUrl: string;
}

export const getUser = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        name: 'Alexandr Y.',
        imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1629465123/Ellipse_59_vls5ji.jpg',
      });
    }, 1000);
  });
};
