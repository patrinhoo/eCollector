const surfaceTypeMap = {
  MAT: 'MATOWA',
  GLOSS: 'BŁYSZCZĄCA',
  COATED: 'LAKIEROWANA',
  MAT_COATED: 'MATOWA/LAKIEROWANA',
  OTHER: 'INNY',
};

export const getSurfaceTypeName = (status) => {
  return surfaceTypeMap[status] ?? '-';
};
