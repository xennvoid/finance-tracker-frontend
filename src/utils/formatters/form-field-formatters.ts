export const formatCardNumberInput = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim()
    .slice(0, 19);

export const formatNameInput = (value: string) => {
  value = value.replace(/^[ \-]+/, '');

  let cleaned = value.replace(/[^\p{L} \-']/gu, '');

  cleaned = cleaned.replace(/([ \-]){2,}/g, '$1');

  const words = cleaned.split(/(\s+)/);

  return words
    .map((word) =>
      word.trim() ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word,
    )
    .join('')
    .slice(0, 50);
};
