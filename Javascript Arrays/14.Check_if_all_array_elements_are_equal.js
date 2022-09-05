// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function
myFunction
(
arr
)
{

return arr.reduce((acc,cur)=> acc === cur ? cur : false ,arr[0]) === arr[0] ? true : false;

// actual answer
// return new Set(arr).size === 1

}