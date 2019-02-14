// Carica i moduli di test:
const { isTypeCorrect, describeTest, verifyExistence } = require('./tester.js');

// Carica il dizionario:
const Dictionary = require('./Dictionary.js');

// Carica le funzione del dictionario:
const { nounFactory } = require('./dictionaryFunctions.js');



// TESTS
  // - Dictionary exists.
  describeTest("Does dictionary exist?");
  const result = verifyExistence(Dictionary);
  console.log(Dictionary);
  if (result === true) {
    console.log("Inside true loop");
    console.log("✓ Dictionary exists.");
    console.log(result);
  } else if (result === false) {
    console.log("Inside false loop");
    console.log("✗ Dictionary does not exist!");
    console.log(result);
  } else {
    console.log("ERROR!");
  }
  // - Dictionary contents can be output on the screen.
  // - Can add a word to the dictionary.
  // - Can find a word in the dictionary.

  // DEPRECATO!

    // This must change to reflect that nouns are objects.

    // OLD TESTS
    // // Noun class:
    //   describeTest("Noun class should exist and be a function:");
    //   var result = isTypeCorrect(Noun, "function");
    //   console.log('Result is:  ' + result);

    //   describeTest("An instance of a Noun can be created:");
    //   const word = new Noun("NounName");
    //   var result = verifyExistence(word);
    //   console.log('Result is:  ' + result);

    // NEW TESTS TO WRITE:
    //  nounFactory:
    //  - nounFactory exists and is a function
    //  - nounFactory returns a noun object, or an error when creation fails due to:
    //    - Missing parameters