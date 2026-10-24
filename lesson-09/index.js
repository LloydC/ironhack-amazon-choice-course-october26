// const a = [56,34,78, 69]
// const b = [21,76,43, 86, 90, 234, 654]

// sum(a) --> 237
// avg(a) --> 59,25

// Input --> Output
function sum(array) {
  if (!array.length) return;
 
  for (let sum = 0, i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
 
function avg(array) {
  if (!array.length) return;
 
  return sum(array) / array.length;
}