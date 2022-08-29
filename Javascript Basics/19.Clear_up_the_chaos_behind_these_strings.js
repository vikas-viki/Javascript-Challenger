// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b) {
  a = a.replace("%", "");
  b = b.replace("%", "").split("").reverse().join("");
  return a.concat(b).charAt(0).toUpperCase() + a.concat(b).slice(1);

  //   actual answer
  // function myFunction(a, b) {
  //     const func = x => x.replace('%','');
  //     const first = func(a);
  //     const second = func(b).split('').reverse().join('');
  //     return first.charAt(0).toUpperCase() + first.slice(1) + second;
  //   }
}
