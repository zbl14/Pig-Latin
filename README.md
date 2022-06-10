## TDD

```sh
Describe: pigLatin()
```
Test1: "It will add 'way' to the end of 'a', return false with otherinput
Code: 
const text = "a";
pigLatin(text);
Expected Output: away

Test2: "It will add 'way' to the end of a word if it start with "a", return false with otherinput
Code: 
const text = "apple";
pigLatin(text);
Expected Output: appleway

Test3: "It will add 'way' to the end of a word that begin with a vowel."
Code: 
const text = "eleven";
pigLatin(text);
Expected Output: elevenway

Test4: "It will move the first consonant to the end of the word and add 'ay' to the end, if the word begin with a consonants"
Code: 
const text = "boy";
pigLatin(text);
Expected Output: oybay

Test5: "It will move the 'qu' to the end of the word and add 'ay' to the end, if the word begin with 'qu'."
Code: 
const text = "quick"
pigLatin("text");
Expected Output: ickquay

Test6: "It will give a sentence that each word follow Pig Latin rule reguardless of case"
Code: 
const text = "I like to eat apple quickly";
pigLatin("text");
Expected Output: Iway ikelay otay eatway appleway icklyquay


# Pig Latin

#### By Ben Goodrow, Seung Lee, Zhibin Liang

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## [GitHub Pages Link]()

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee

