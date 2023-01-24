export const addToArray = <T>(array: T[], item: T, addIfsExisting: boolean = false, addFirst: boolean = true): T[] => {
  const clone = JSON.parse(JSON.stringify(array));
  const isInArray = array.map((it) => JSON.stringify(it)).includes(JSON.stringify(item));
  if (!addIfsExisting && !isInArray) {
    if (addFirst) clone.unshift(item);
    else clone.push(item);
    return clone;
  }
  if (addFirst) clone.unshift(item);
  else clone.push(item);
  return clone;
};
