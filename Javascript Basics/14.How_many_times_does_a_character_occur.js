// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  let arr = [];
  for (i = 0; i < b.length; i++) {
    if (b[i] === a) {
      arr.push(a);
    }
  }
  return arr.length;

  //   actual code
  return b.split(a).length - 1;
}
