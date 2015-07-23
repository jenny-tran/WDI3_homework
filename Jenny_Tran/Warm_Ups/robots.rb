require 'pry'

class Robot

  def initialize()
    @instructions = 0
    @name = "#{prefix}#{suffix}"
  end

  def reset
    @instructions +=1
    @name = "#{prefix}#{suffix}"
  end

  def instruction_count
    @instructions
  end

  def name
    @instructions += 1
    @name
  end

  def prefix
    ('AA'..'ZZ').to_a.sample
  end

  def suffix
    ('000'..'999').to_a.sample
  end

end

puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name

binding.pry

    # # Michael's approach
    # rand((90-65) + 65).chr

    # # Hugh
    # ('A'..'Z').to_a[rand(26)]


  # def randomSelect(letters, numbers)
  #   letters = ('aa'..'zz').to_a.sample
  #   numbers = ('000'..'999').to_a.sample
  #   letters.sample(2) + numbers.sample(
  #   Robot.new = 
  # end