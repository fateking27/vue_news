export const dateFormat = function (value, spe) {
  let y = value.getFullYear();
  let m = value.getMonth() + 1;
  let d = value.getDate();
  return `${y}${spe}${m}${spe}${d}`;
};
