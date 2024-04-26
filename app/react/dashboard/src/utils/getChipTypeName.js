const chipTypeMap = {
  MANUFACTURER: 'PRODUCENT',
  PATTERN: 'WZÓR',
  IMAGE: 'OBRAZ',
};

export const getChipTypeName = (status) => {
  return chipTypeMap[status] ?? '-';
};
