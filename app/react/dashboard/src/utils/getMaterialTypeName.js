const materialTypeMap = {
  CARTOON: 'KARTON',
  PLASTIC: 'PLASTIK',
  OTHER: 'INNY',
};

export const getMaterialTypeName = (status) => {
  return materialTypeMap[status] ?? '-';
};
