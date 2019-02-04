// Symbols used to 

const dictionary = [
  // Noun types:
  word1: {
    type: "noun",
    english: {
      name: "book",
      description: "Pages of a document, or documents, that are bound together.",
      gender: "masculine"
    },
    sicilian: {
      dame: "libbru",
      description: "Pagine di un documentu, o ducunmenti, chi sunnu fazzo nzemmula.",
      gender: "maschili"
    }
  },
  // Verb types:
  word3: {
    type: "verb",
    english: {
      name: "read",
      description: "Understanding words on a page.",
      conjugate: {
        present: {
          i: "read",
          you: "read",
          he: "reads",
          she: "reads",
          they: "read",
          we: "read",
          youPlural: "read"
        }
      }
    },
    sicilian: {
      name: "lèggiri",
      description: "Capisciri parole supra na folla.",
      conjugate: {
        present: {
          iu: "leggiu",
          tu: "leggi",
          iddru: "leggi",
          iddra: "leggi",
          iddri: "lèggiunu",
          nautri: "liggemu",
          vuatri: "liggiti",
          vossia: "leggi",
          lei: "leggi"
        }
      }
    }
  }
];

//  let prompt = "_____"
//  let word = dictionary.word3;
//  let answer = word3.sicilian.conjugate.iddra;
//  let question = "Iddra un " + prompt + " nenti.";
//  console.log(question);

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
