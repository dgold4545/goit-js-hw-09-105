export const saveToLocalStorage = function (key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
};
