export const getCurrencyPrice = (price: number, currency: string): string => {
  switch (currency) {
    case 'USD': {
      return `$${price}`;
    }

    default: {
      return `$${price}`;
    }
  }
};
