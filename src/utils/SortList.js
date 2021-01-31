export const sortList = (array, key, ascending) => {
  const sortedArray = array?.sort((a, b) => {
    if (key === "release_date") {
      return a[key].replace(/-/g, "") - b[key].replace(/-/g, "");
    }
    return a[key] - b[key];
  });
  if (ascending) {
    return sortedArray;
  } else return sortedArray.reverse();
};
