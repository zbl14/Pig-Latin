// Business Logic

// Describe: pigLatin() Test1
// function pigLatin(text) {
//   if (text === "a") {
//   let newText = text + "way";
//   return newText;
//   };
//   return false
// };

// Test2
// function pigLatin(text) {
//   if (text.charAt(0) === "a") {
//   let newText = text + "way";
//   return newText;
//   };
//   return false
// };

// Test3
// function pigLatin(text) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   if (vowels.includes(text.charAt(0))) {
//   let newText = text + "way";
//   return newText;
//   };
//   return false
// };

// Test4
function pigLatin(text) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newText="";
  if (vowels.includes(text.charAt(0))) {
    newText = text.concat("way");
  return newText;
  } else {
    newText = text.substring(1).concat(text.charAt(0),"ay");
  };
  return newText
}






