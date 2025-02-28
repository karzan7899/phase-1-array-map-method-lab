const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   let arrt = [];
//   tutorials.map((str) => {
//     let arr = str.split(" ");
//     arr.forEach(element => {
//       // element[0].toUpperCase();
//       (element[0] = element[0].toUpperCase())
//       arrt += element;
//     });
// arrt.forEach()
//   })
//   console.log(arrt);
//   return arrt
// }

const titleCased = () => {
  return tutorials.map((tutorial) => {
    const splitted = tutorial.split(' ')
    const capitalized = splitted.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    const result = capitalized.join(' ')
    return result
  })
}
