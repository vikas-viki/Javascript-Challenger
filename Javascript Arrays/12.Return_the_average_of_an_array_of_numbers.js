// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function
    myFunction
    (
        arr
    ) {
    return arr.reduce((accumulator, eachNumber) => accumulator + eachNumber, 0) / arr.length

}