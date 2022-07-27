export const makeFieldPathGetter = <S extends string, F extends string>(
  sectionName: S,
) => (fieldName: F) => `${sectionName}.${fieldName}`;
