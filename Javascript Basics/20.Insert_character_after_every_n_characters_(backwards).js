// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
  let arr = [];
  function sliceByThree(z) {
    arr.push(z.slice(-3));
    y = z.slice(0, -3);
    if (y.length > 0) {
      sliceByThree(y);
    }
    return arr;
  }
  sliceByThree(a);
  return arr.reverse().join(b);

  // actual answer
  // let result = [];
  //    let rest = a;
  //    while (rest.length) {
  //    	result.push(rest.slice(-3));
  //    	rest = rest.slice(0, -3);
  //    }
  //    return result.reverse().join(b);
}
