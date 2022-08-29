// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a) {
  let b = String(a).split("");
  return b.map((digit) => Number(digit));

  //   actual answer
  // function myFunction( a ) {
  //     const string = a + '';
  //     const strings = string.split('');
  //     return strings.map(digit => Number(digit))
  //   }
}
