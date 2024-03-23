export const spliceString = (text, length) => {
  if (text) {
    return text.slice(0, length);
  }
  return "";
};

export const isEmpty = (text) => {
  if (text && text !== "*") {
    return false;
  }
  return true;
};
