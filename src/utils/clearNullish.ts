type AnyObject = {
  [key: string]: any;
};

export function clearNullish(obj: AnyObject) {
  Object.entries(obj).forEach(([key, value]) => {
    if (value === '' || value === null || value === undefined) {
      delete obj[key];
    }
  });

  return Object.keys(obj).length !== 0;
};