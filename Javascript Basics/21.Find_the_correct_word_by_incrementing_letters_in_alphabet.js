// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  let arr = [];
  let alphabets = String.fromCharCode(...Array(123).keys()).slice(97);
  for (i = 0; i < str.length; i++) {
    arr.push(alphabets[alphabets.indexOf(str[i]) + 1]);
  }
  return arr.join("");

  //   actual answer
  // const arr = [...str];
  //   const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  //   return correctedArray.join('');
}
