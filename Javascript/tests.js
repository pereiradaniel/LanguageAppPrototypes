// Carica le classi di parole:
const Noun = require('./Noun.js');

// Carica i moduli di test:
const { isTypeCorrect, describeTest, verifyExistence } = require('./tester.js');


// TESTS

// Noun class:
  describeTest("Noun class should exist and be a function:");
  var result = isTypeCorrect(Noun, "function");
  console.log('Result is:  ' + result);

  describeTest("An instance of a Noun can be created:");
  const word = new Noun("NounName");
  var result = verifyExistence(word);
  console.log('Result is:  ' + result);