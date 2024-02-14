export const checkDuplicates = (dataSet: any, value: string | number, key: string) => {
  return dataSet.some((obj: any) => obj[key] === value);
}