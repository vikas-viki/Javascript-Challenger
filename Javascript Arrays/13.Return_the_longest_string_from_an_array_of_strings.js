// Write a function that takes an array of strings as argument
// Return the longest string
function
    myFunction
    (
        arr
    ) {

    return arr.sort((a, b) => a.length - b.length).reverse()[0]
    // actual answer 
    // return arr.reduce((a, b) => a.length <= b.length ? b : a);
}