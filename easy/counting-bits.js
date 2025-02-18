var countBits = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    let count = i.toString(2).split('1').length - 1; // Считаем количество '1'
    arr.push(count);
  }
  return arr;
};

console.log(countBits(2));
