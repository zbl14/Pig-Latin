// Business Logic

// Describe: pigLatin() Test1
// function pigLatin(text) {
//   if (text === "a") {
//   let newText = text + "way";
//   return newText;
//   };
//   return false
// };

// Describe: pigLatin() Test2
// function pigLatin(text) {
//   if (text.charAt(0) === "a") {
//   let newText = text + "way";
//   return newText;
//   };
//   return false
// };

// Describe: pigLatin() Test3

function pigLatin(text) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(text.charAt(0))) {
  let newText = text + "way";
  return newText;
  };
  return false
};







