// Business Logic

//
// function pigLatin(text) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < vowels.length; i++) {
//     if (text === vowels[i]) {
//       return (text.concat("way"));
//     }
//   }
//   return text;
// }

function pigLatin(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (text.slice(0,1) === vowels[i]) {
      return (text.concat("way"));
    }
  }
  return text;
}