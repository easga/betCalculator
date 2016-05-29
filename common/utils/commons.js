export const sanitize = text => text.trim().toUpperCase();
export const isEmpty = obj => !obj || !Object.keys(obj).length;
export const isArrayUnique = arr => {
  const map = {};
  for (let i = 0, size = arr.length; i < size; i++) {
    if (map[arr[i]]) {
      return false;
    }
    map[arr[i]] = true;
  }
  return true;
};
