export const getCamelizedName = (name: string): string => {
  return name
    .split(' ')
    .map((word, index) => (index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)))
    .join('');
};
