require 'pry'

class Coffee
# constructor method
  def initialize(type, sugars, strength, name)
    @type = type
    @sugars = sugars
    @strength = strength
    @name = name
  end

  # def bad_name(new_name)
  #   @name = new_name
  # end

  def to_s
    puts "#{@name}'s #{@type}, #{@strength} strength, #{@sugars}."
  end

end

c1 = Coffee.new('latte', '1 sugar', 'medium', 'Jenny')
puts c1
 

binding.pry
