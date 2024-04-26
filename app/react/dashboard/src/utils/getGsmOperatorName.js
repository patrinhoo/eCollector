const gsmOperatorMap = {
  ERA: 'ERA',
  TAK_TAK: 'TAK TAK',
  IDEA: 'IDEA',
  POP: 'POP',
  ORANGE: 'ORANGE',
  PLUS: 'PLUS',
  SIMPLUS: 'SIMPLUS',
  PLUSH: 'PLUSH',
  HEYAH: 'HEYAH',
  PLAY: 'PLAY',
  REDBULL: 'REDBULL',
  OTHER: 'INNY',
};

export const getGsmOperatorName = (status) => {
  return gsmOperatorMap[status] ?? '-';
};
