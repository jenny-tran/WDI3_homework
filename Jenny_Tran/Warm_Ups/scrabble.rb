class Scrabble
  def self.lookup(letter)
    hash = {
      'a' => 1,
      'b' => 3,
      'c' => 3
    }
      hash[letter]
  end

  def self.score(word)
    
  end
end


# class Scrabble
#   score = {
#     ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'] => 1,
#     ['D', 'G'] => 2,
#     ['B', 'C', 'M', 'P'] => 3,
#     ['F', 'H', 'V', 'W', 'Y'] => 4,
#     ['K'] => 5,
#     ['J', 'X'] => 8,
#     ['Q', 'Z'] => 10
#   }

#   def score(word)
#     a = word.upcase.split('').to_a
#     a.each |letter|


#   end
# end

# Scrabble.score("cabbage")

    # 1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    # 2 => ['D', 'G'],
    # 3 => ['B', 'C', 'M', 'P'],
    # ['F', 'H', 'V', 'W', 'Y'],
    # ['K'] => 5
    # ['J', 'X'] => 8
    # ['Q', 'Z'] => 10