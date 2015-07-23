class Client
  attr_accessor :name, :children, :age, :pets, :adopted

  def initialize(name, children, age, pets)
    # @id = 
    @name = name
    @children = children
    @age = age
    @pets = pets
    # @adopted = 
  end

  def to_s
    "Name: #{@name}, Number of children: #{children}, Age: #{age} years old, Number of pets: #{pets}."
  end

  def id_num

  end

end



class Adopt

end

