export const formatMonthYearShort = (dateInput: Date | string): string => {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return 'N/A';

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  return `${month}/${year}`;
};
