module.exports = function check(str, bracketsConfig) {
  let bracket = bracketsConfig.map((el) => el.join(""));
  let result = (index) => {
    for (let i of bracket) {
      if (index.includes(i)) index = index.replace(i, "");
    }
    str = index;
    for (let i of bracket) {
      if (str.includes(i)) result(str);
    }
  };
  result(str);
  return str.length === 0;
}