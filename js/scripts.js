// Business Logic

//                 e
function pigLatin(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (text === vowels[i]) {
      return (text + 'way');
    }
  }
  return text;
}