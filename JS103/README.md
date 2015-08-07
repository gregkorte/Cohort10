#JavaScript 103

##SolarSystem Exercise

###Part 1
Create a new directory named modules where they will create an HTML and a JS file. The JS file should create an IIFE module named SolarSystem. Have the student create properties and methods for the following:

1. Getter for an array of planets that cannot be modified.
2. Getter/setter for number of planets that humans have landed people or robots on.
3. Public property for holding a last modified date.
4. Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
5. Any other fun/related data that the student wants to add.

###Part 2
Create a new JS file for the solar system application that augments the SolarSystem module you created in the initial JS file.

1. Getter for an array of closest 5 stars to the Sun.
2. Getter/setter for the estimated age of the solar system in earth years.
3. Getter/setter for array of known dwarf planets.

---

##Translate Exercise

Represent a small bilingual lexicon as a Javascript object (see example below) and use it to translate a holiday card message from English into another language. Each member of the team will build a JavaScript module that will convert text entered into an input field to the language that they choose.

{"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}

This is Swedish, so please choose other languages. You can add as many words/translations as you wish so that the user can write more complex holiday cards.

1. One team member creates a Github project and adds the others as collaborators.
2. Each team member picks a language.
3. Your project should have one HTML file that has a textarea, a select element with an option for each language, a button with a label of "Translate", and an empty DOM element into which the translated text will be inserted.
4. The team must discuss and choose a single variable name that will hold all of the logic that the team creates (i.e. see the Sedan example above).
5. Each team member will create one JavaScript file that contains one IIFE. Each teammate's IIFE will augment the other teammates' IIFEs.
6. The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.
7. Each IIFE should expose, in its public interface, a method named translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's value should be the text entered in by the user.
8. The team should create an extra JavaScript file that handles interacting with the form elements and determining which method should be called.

####Optional Bonus 1
Find a way to write your IIFEs so that it doesn't matter whose module gets created first.

####Optional Bonus 2
In addition to inserting the translated text into the HTML document, have the browser read the translated text to the user.
