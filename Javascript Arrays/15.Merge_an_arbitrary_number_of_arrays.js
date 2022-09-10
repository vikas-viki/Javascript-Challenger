// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function
    myFunction
    (
        ...arrays
    ) {
    arr = [];
    arrays.forEach((item) => {
        item.forEach((itemI) => { arr.push(itemI) })
    })
    return arr;

    // actual code
    // return arrays.flat();
}
