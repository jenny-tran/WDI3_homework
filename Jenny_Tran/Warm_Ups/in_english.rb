def in_english(number)
  english_num = {
   0 => 'zero',
   1 => 'one',
   2 => 'two',
   3 => 'three',
   4 => 'four',
   5 => 'five',
   6 => 'six',
   7 => 'seven',
   8 => 'eight',
   9 => 'nine',
   10 => 'ten',
   11 => 'eleven',
   12 => 'twelve',
   13 => 'thirteen',
   14 => 'fourteen',
   15 => 'fifteen',
   16 => 'sixteen',
   17 => 'seventeen',
   18 => 'eighteen',
   19 => 'nineteen',
   20 => 'twenty',
   30 => 'thirty',
   40 => 'forty',
   50 => 'fifty',
   60 => 'sixty',
   70 => 'seventy',
   80 => 'eighty',
   90 => 'ninety',
  }

    if 0 > number 
      "Please choose a number between 0-99"
    elsif number > 100
      "Please choose a number between 0-99"
    elsif number < 20
      english_num[number]
    elsif number > 20
      first = number.to_s.split('')[0].concat('0').to_i
      first_word = english_num[first]
      second = number.to_s.split('')[1].to_i
      second_word = english_num[second]
      "#{first_word}-#{second_word}" 
      
    end
end


puts in_english(12)
puts in_english(48)
puts in_english(91)
puts in_english(108)
puts in_english(0)
puts in_english(-3)



