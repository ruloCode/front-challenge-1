export const getState = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};
export const setState = (key, value) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};
export const toggleLocalStorage = async (key) => {
  try {
    const localState = getState(key);
    await setState(key, !localState);
    const updateState = getState(key);

    return updateState;
  } catch (error) {
    console.log(error);
  }
};