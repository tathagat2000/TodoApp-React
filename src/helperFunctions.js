const helperFunctions = {
  getTime: () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return date + ", " + time;
  },

  convertToList: (object) => {
    if (Array.isArray(object)) {
      return object;
    } else {
      return [object];
    }
  },
};

export { helperFunctions };
