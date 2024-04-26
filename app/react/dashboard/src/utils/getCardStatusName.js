const cardStatusNameMap = {
  HAVE: 'MAM',
  MISSING: 'BRAK',
  EXCESS: 'NADWYŻKA',
};

export const getCardStatusName = (status) => {
  return cardStatusNameMap[status] ?? '-';
};
