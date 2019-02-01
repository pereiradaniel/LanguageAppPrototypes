// Funzioni di test.
// Queste funzioni vengono utilizzate per scrivere i testt in "./test.js".

// Stampa la descrizione del testt sul terminale.
const describeTest = (testDescription) => { console.log(testDescription) }

// Restituisce true se il tipo del soggetto corrisponde al tipo di aspettativa. Restituisce false se non corrispondono.
const isTypeCorrect = function(subject, expectation) {
  subjectType = typeof subject;
  expectationType = typeof expectation;
  if (expectation === subjectType) {
    return true;
  } else {
    return false;
  }
}

// Restituisce vero se l'oggetto esiste.
const verifyExistence = function(object) {
  if (!object) {
    return false
  } else if (object) {
    return true
  }
}

module.exports = {
  describeTest,
  isTypeCorrect,
  verifyExistence
};