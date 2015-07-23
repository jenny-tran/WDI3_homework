puts "Enter a number to find the sum of its multiples"
number = gets.chomp.to_i

range = (1..10).to_a
multiples = []
  for i in range
    if i % number == 0
      multiples.push(i)
    end
  end

result = multiples.inject(:+)
puts "The sum of multiples for #{number} is #{result}."


