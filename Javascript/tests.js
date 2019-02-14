// Carica i moduli di test:
const { isTypeCorrect, describeTest, verifyExistence } = require('./tester.js');

// Carica il dizionario:
const Dictionary = require('./Dictionary.js');

// Carica le funzione del dictionario:
const { nounFactory } = require('./dictionaryFunctions.js');



// TESTS
  // - Dictionary exists.
  // - Il dizionario esiste.
  describeTest("Does dictionary exist?");
  const result = verifyExistence(Dictionary);
  if (result === true) {
    console.log("✓ Dictionary exists.");
    console.log(result);
  } else if (result === false) {
    console.log("✗ Dictionary does not exist!");
    console.log(result);
  } else {
    console.log("TEST ERROR!");
  }

  // - Dictionary contents can be output on the screen.
  // - I contenuti del dizionario possono essere visualizzati sullo schermo.
  // - Can add a word to the dictionary.
  // - Può aggiungere una parola al dizionario.
  // - Can find a word in the dictionary.
  // - Puoi trovare una parola nel dizionario.