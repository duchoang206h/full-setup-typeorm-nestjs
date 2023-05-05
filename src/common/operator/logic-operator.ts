export const stringOperator = [
  'like',
  'contains',
  'startsWith',
  'endsWith',
  'iLike',
  'notLike',
  'notILike',
  'eq',
  'ne',
];
export const numberOperator = [
  'eq',
  'ne',
  'gt',
  'gte',
  'lt',
  'lte',
  'not',
  'in',
  'notIn',
  'between',
  'notBetween',
];
export const genPropWithSuffix = (prop: string, type: string): string[] => {
  const propSuffix = [prop];
  switch (type) {
    case 'number':
      propSuffix.push(...numberOperator.map((o) => prop + '_' + o));
      break;
    case 'string':
      propSuffix.push(...stringOperator.map((o) => prop + '_' + o));
      break;
    ///
    default:
      break;
  }
  return propSuffix;
};
