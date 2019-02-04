// Carica le funzione del dictionario:
const { nounFactory } = require('./dictionaryFunctions.js');

// Carica i moduli di test:
const { isTypeCorrect, describeTest, verifyExistence } = require('./tester.js');


// TESTS

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