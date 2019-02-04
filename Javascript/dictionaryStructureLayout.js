const dictionary = [
  word1: {
    type: "noun",
    english: {
      englishName: "name",
      englishDescription: "description"
    },
    sicilian: {
      sicilianName: "name",
      sicilianDescription: "descrizione"
    }
  },

  word2: {
    type: "noun",
    english: {
      englishName: "name",
      englishDescription: "description"
    },
    sicilian: {
      sicilianName: "name",
      sicilianDescription: "descrizione"
    }
  }
];

// Access a word's English name property:
//  dictionary.word1.english.englishName;

// A program could load a word to test the user on:
// $  let testWord = dictionary.word1;
//  console.log('Translate this word: ' + testWord.sicilian.sicilianName);

// A program could generate a question for the user:
// $  let testAnswer = translateThisWordFrom(testWord, 'sicilian');
// const translateThisWord(word, testLanguage) {
//   if (testLanguage === 'english') {
//     return word.sicilian.sicilianName;
//   } else {
//     return word.english.englishName;
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





// Noun Object
// const createNewNoun = function(noun) {
//   var object = {};
//   object = noun;
//   return object;
// }

// console.log(dictionary);



// var nounObj = {
//   english: {
//     englishName: "name",
//     englishDescription: "description"
//   },
//   sicilian: {
//     sicilianName: "nome",
//     sicilianDescription: "descrizione"
//   }
// }


