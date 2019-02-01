  # Methods
  #########

    # select_word(word_array)

    # Returns a random word from selected array
    #  Arguments
    #  word_array:  an array containing words to be guessed

      def select_word(word_array)
        return word_array[Random.rand(word_array.length)]
      end

###############################################################


  # Classes
  #########

    # NOUN CLASS
    class Noun
      def initialize (
        sicilian_singular,
        sicilian_plural,
        english_singular,
        english_plural,
        gender_of_noun,
        irregular
        )

        @sicilian_singular = sicilian_singular
        @sicilian_plural = sicilian_plural
        @english_singular = english_singular
        @english_plural = english_plural
        @gender_of_noun = gender_of_noun
        @irregular = irregular
      end

      def sicilian_singular
        @sicilian_singular
      end

      def sicilian_plural
        @sicilian_plural
      end

      def english_singular
        @english_singular
      end

      def english_plural
        @english_plural
      end

      def gender
        @gender_of_noun
      end

      def irregular
        @irregular
      end
    end


###############################################################


  # Seeds
  #######

  # array full of words
  word_array = []

  # words
  annu = Noun.new("annu", "anni", "year", "years", "male", false)
  word_array << annu

  jornu = Noun.new("jornu", "jorna", "day", "days", "male", true)
  word_array << jornu

###############################################################


  # Test code
  ###########


  word_to_guess = select_word(word_array)
  puts word_to_guess.sicilian_singular
  puts word_to_guess.sicilian_plural
  puts word_to_guess.english_singular
  puts word_to_guess.english_plural
  puts word_to_guess.gender
  puts "Irregular?: " + word_to_guess.irregular.to_s