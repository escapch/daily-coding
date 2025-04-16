Array.prototype.last = function (arr) {
  if (this.length > 0) {
    return this[this.length - 1];
  }
  return -1;
};
const arr = [];
