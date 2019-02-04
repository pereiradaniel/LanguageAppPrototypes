const Dictionary = {};
module.exports = Dictionary;

// Dictionary structure

  // const Dictionary = {
  //   // Noun types:
  //   word1: {
  //     type: "noun",
  //     english: {
  //       name: "book",
  //       plural: "libbri",
  //       description: "Pages of a document, or documents, that are bound together.",
  //       gender: "masculine"
  //     },
  //     sicilian: {
  //       name: "libbru",
  //       plural: "libri",
  //       description: "Pagine di un documentu, o ducunmenti, chi sunnu fazzo nzemmula.",
  //       gender: "maschili"
  //     }
  //   },
  //   // Verb types:
  //   word2: {
  //     type: "verb",
  //     english: {
  //       name: "read",
  //       description: "Understanding words on a page.",
  //       conjugate: {
  //         present: {
  //           i: "read",
  //           you: "read",
  //           he: "reads",
  //           she: "reads",
  //           they: "read",
  //           we: "read",
  //           youPlural: "read"
  //         }
  //       }
  //     },
  //     sicilian: {
  //       name: "lèggiri",
  //       description: "Capisciri parole supra na folla.",
  //       conjugate: {
  //         present: {
  //           iu: "leggiu",
  //           tu: "leggi",
  //           iddru: "leggi",
  //           iddra: "leggi",
  //           iddri: "lèggiunu",
  //           nautri: "liggemu",
  //           vuatri: "liggiti",
  //           vossia: "leggi",
  //           lei: "leggi"
  //         }
  //       }
  //     }
  //   }
  // };

// -------------------------------------------------------------------


// Programming notes

  // Access a word's English name property:
  //  dictionary.word1.english.name;

  // A program could load a word to test the user on:
  // $  let testWord = dictionary.word1;
  //  console.log('Translate this word: ' + testWord.sicilian.name);

  // A program could generate a question for the user:
  // $  let testAnswer = translateThisWordFrom(testWord, 'sicilian');
  // const translateThisWord(word, testLanguage) {
  //   if (testLanguage === 'english') {
  //     return word.sicilian.name;
  //   } else {
  //     return word.english.name;
  //   }
  // }

  // A program could check user input and compare it with the correct answer:
  //  $  isUserCorrect(testWord, testAnswer, userInput);
  //  const checkAnswer = function(word, correctAnswer, userResponse) {
  //    if (userResponse === correctAnswer) {
  //      return true;
  //    } else {
  //      return false;
  //    }
  //  }


// Considerations

  // Search a word by language.
  // Match a word by closest to user input.