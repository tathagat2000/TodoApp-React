const helperFunctions = {
  getTime: () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return date + ", " + time;
  },

  makeCopy: (item) => {
    //If it is an array of objects
    if (Array.isArray(item) && item[0] instanceof Object) {
      return item.map((obj) => ({ ...obj }));
    }
    // Else if it is an object
    else if (item instanceof Object) {
      return { ...item };
    }
    //Primitive value
    else {
      return item;
    }
  },
};

const convertToList = (object) => {
  if (Array.isArray(object)) {
    return object;
  } else {
    return [object];
  }
};

helperFunctions.convertToList = convertToList;

export { helperFunctions };
