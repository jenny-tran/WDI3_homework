class Animal
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize(name, age, gender, species, toys)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
  end

  def to_s
    "Name: #{@name}, Age: #{age} years old, Gender: #{gender}, Species: #{species}, Toys: #{toys}."
  end

end