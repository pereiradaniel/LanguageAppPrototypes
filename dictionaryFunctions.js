// Nouns
// -----

// Noun factory
  // To create a noun:
  // let newDictionaryWord = nounFactory("book", "books", Pages of a document, or documents, that are bound together.", "masculine", "libbru", "libbri", "Pagine di un documentu, o ducunmenti, chi sunnu fazzo nzemmula.", "maschili");
  // dictionary.push(newDictionaryWord)

const nounFactory = (englishName, englishDescription, englishGender, englishPlural, sicilianName, sicilianPlural, sicilianDescription, sicilianGender) => {
  return {
    type: "noun",
    english: {
      name: englishName,
      plural: englishPlural,
      description: englishDescription,
      gender: englishGender
    },
    sicilian: {
      name: sicilianName,
      plural: sicilianPlural,
      description: sicilianDescription,
      gender: sicilianGender
    }
  }
}



//  Verbi
//  -----

//  Notes on possible usage of verb structure:

  //  let prompt = "_____"
  //  let word = dictionary.word3;
  //  let answer = word3.sicilian.conjugate.iddra;
  //  let question = "Iddra un " + prompt + " nenti.";
  //  console.log(question);


module.exports = {
  nounFactory
};