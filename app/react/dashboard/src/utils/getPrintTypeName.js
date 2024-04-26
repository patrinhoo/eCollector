const printTypeMap = {
  EMBOSSED_HORIZONTAL: 'TŁOCZONY POZIOMY',
  EMBOSSED_VERTICAL: 'TŁOCZONY PIONOWY',
  PRINTED_HORIZONTAL: 'DRUKOWANY POZIOMY',
  PRINTED_VERTICAL: 'DRUKOWANY PIONOWY',
};

export const getPrintTypeName = (status) => {
  return printTypeMap[status] ?? '-';
};
