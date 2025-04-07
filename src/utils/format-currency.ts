export const formatCurrency = (value: number, currency: string = 'USD') => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(value);
};
