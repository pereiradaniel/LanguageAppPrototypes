// Funzione di classe Noun.

class Noun {
  constructor(name) { this.name = name; }
  //   englishName, englishSingular, englishPlural, englishDefinition,
  //   sicilianName, sicilianSingular, sicilianPlural, sicilianDefinition,
  //   nounGender, isIrregular) {
  //   this.englishName = englishName;
  //   this.englishSingular = englishSingular;
  //   this.englishPlural = englishPlural;
  //   this.englishDefinition = englishDefinition;
  //   this.sicilianName = sicilianName;
  //   this.sicilianSingular = sicilianSingular;
  //   this.sicilianPlural = sicilianPlural;
  //   this.sicilianDefinition = sicilianDefinition;
  // }
  test() {
    return "TEST" + this.name;
  }
}

module.exports = Noun