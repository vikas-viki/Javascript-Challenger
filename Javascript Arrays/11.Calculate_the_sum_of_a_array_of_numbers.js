// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function
    myFunction
    (
        a
    ) {
    let b = 0;
    for (i = 0; i < a.length; i++) {
        b = b + a[i]
    }
    return b;

    // actual answer
    // function myFunction(a) {
    //     return a.reduce((acc, cur) => acc + cur, 0);
    //  }

}