export const hideCardNumber = (cardNumber: string) => {
  const cardNumberSets = cardNumber.split(' ');

  const hiddenCardNumber = cardNumberSets.map((setOfNumbers, idx) => {
    return idx === 1 || idx === 2 ? '****' : setOfNumbers;
  });

  return hiddenCardNumber.join(' ');
};
