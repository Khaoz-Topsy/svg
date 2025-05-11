export const makeArrayOrDefault = <T>(propsVal?: T | Array<T>, defaultValue: Array<T> = []): Array<T> => {
  if (propsVal == null) return defaultValue;
  if (Array.isArray(propsVal) == true) return [...propsVal];

  // make array of whatever is passed in
  return [propsVal];
};

export const onlyUnique = (value: string, index: number, array: Array<string>) => {
  return array.indexOf(value) === index;
};

export const arrayOfNLength = (length: number) => Array.from(Array(length).keys());

export const arrayContains = <T>(arr: Array<T>, items: Array<T>, method: 'AND' | 'OR' = 'AND') => {
  for (const item of items) {
    const hasItem = arr.includes(item);
    if (method == 'AND' && hasItem == false) return false;
    if (method == 'OR' && hasItem == true) return true;
  }
  return true;
};
