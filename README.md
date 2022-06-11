# Pig Latin

#### By Ben Goodrow, Seung Lee, Zhibin Liang

#### A webpage supports translation from English to Pig Latin

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

Pig Latin is a language game that involves adding imaginary endings to real English words.

Here are the rules of Pig Latin:

* For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u."
* For words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay".
* If the first consonants include "qu", move the "q" and the "u." 

## Setup/Installation Requirements

1. Clone the repo
    ```sh
    git clone (https://github.com/zbl14/Mr.Robogers-Neighborhood.git)
    ```
2. Open index.html file
3. Enter a text, then click "Submit" button

## TDD

```sh
Describe: pigLatin()
```
Test: "It will add 'way' to the end of 'a', return false with otherinput"\
Code:\
const text = "a";\
pigLatin(text);\
Expected Output: away

Test: "It will add 'way' to the end of a word if it start with "a", return false with otherinput"\
Code:\
const text = "apple";\
pigLatin(text);\
Expected Output: appleway

Test: "It will add 'way' to the end of a word that begin with a vowel."\
Code:\
const text = "eleven";\
pigLatin(text);\
Expected Output: elevenway

Test: "It will move the first consonant to the end of the word and add 'ay' to the end, if the word begin with a consonants"\
Code:\
const text = "boy";\
pigLatin(text);\
Expected Output: oybay

Test: "It will move the 'qu' to the end of the word and add 'ay' to the end, if the word begin with 'qu'."\
Code:\
const text = "quick"\
pigLatin("text");\
Expected Output: ickquay

Test: "It will give a sentence that each word follow Pig Latin rule reguardless of case"\
Code:\
const text = "I like to eat apple quickly";\
pigLatin("text");\
Expected Output: Iway ikelay otay eatway appleway icklyquay

## Known Bugs

* None

## License

MIT

Copyright &copy; 2022 Ben Goodrow, Seung Lee, Zhibin Liang 

