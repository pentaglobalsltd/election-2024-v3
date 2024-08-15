export function removeKeyFromObjects(arr, keyToRemove) {
    return arr.map(obj => {
      // Check if the current object has the specified key
      if (Object.prototype.hasOwnProperty.call(obj, keyToRemove)) {
        // Create a new object without the specified key
        // eslint-disable-next-line no-unused-vars
        const { [keyToRemove]: _, ...rest } = obj;
        // Recursively remove the key from nested objects
        Object.keys(rest).forEach(key => {
          if (typeof rest[key] === 'object') {
            rest[key] = removeKeyFromObjects([rest[key]], keyToRemove)[0];
          }
        });
        return rest;
      }
      // If the current object does not have the specified key, return it as is
      return obj;
    });
  }
  