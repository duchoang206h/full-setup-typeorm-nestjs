export const MAX_RETURN_RECORD = 1000;
export const getMaxRecordReturn = (limit: number) => {
  return limit > MAX_RETURN_RECORD ? MAX_RETURN_RECORD : limit;
};
