const cardShapeMap = {
  RECTANGLE: 'PROSTOKĄT',
  CIRCLE: 'KOŁO',
  HEART: 'SERCE',
  OTHER: 'INNY',
};

export const getCardShapeName = (status) => {
  return cardShapeMap[status] ?? '-';
};
