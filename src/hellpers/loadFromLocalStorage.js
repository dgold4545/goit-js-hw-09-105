export const loadFromLocalStorage = function (key) {
  const json = localStorage.getItem(key);

  try {
    const data = JSON.parse(json);
    return data;
  } catch (error) {
    return json;
  }
};
