var findTheDifference = function (s, t) {
  const arr = s.split('');
  for (let i = 0; i < t.length; i++) {
    let index = arr.indexOf(t[i]);
    if (index !== -1) {
      arr.splice(index, 1);
    } else return t[i];
  }
};

console.log(findTheDifference((s = 'a'), (t = 'aa')));
