const isPalindrome = (value) => {
  value = value.toLowerCase().replace(/[\W_]/g, '');
  return value === value.split('').reverse().join('');
};

console.log(isPalindrome('racecar'));
