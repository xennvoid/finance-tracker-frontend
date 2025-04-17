export const formatDayMonthYear = (date: Date): string => {
  const dateToFormat = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = dateToFormat.toLocaleDateString(navigator.language || 'en-GB', options);

  return formattedDate;
};
