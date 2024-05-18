const cardTypeNameMap = {
  MAGNETIC: 'MAGNETYCZNE',
  CHIP: 'CHIPOWE',
  GSM: 'GSM',
  ASSOCIATED_WITH_TELEPHONY: 'POWIĄZANE Z TELEFONIĄ',
  OTHER_TOP_UPS: 'DOŁADOWANIA RÓŻNE',
  POLONIA: 'KARTY POLONIJNE',
  OTHER: 'INNE',
};

export const getCardTypeName = (type) => {
  return cardTypeNameMap[type] ?? '-';
};
