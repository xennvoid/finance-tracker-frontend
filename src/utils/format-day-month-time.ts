export const formatDayMonthTime = (date: Date): string => {
  const dateToFormat = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  };

  const formattedDate = dateToFormat.toLocaleDateString(navigator.language || 'en-GB', options);

  return formattedDate;
};
