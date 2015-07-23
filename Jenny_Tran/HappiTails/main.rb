require 'pry'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'
# require_relative 'relationships'

def char_delay(var)
  var.each_char do |c|
    sleep 0.1
    print c
  end
end

option = " "

  
def menu 
  puts "--------------------------------"
  puts "          HAPPYTAILS"
  puts "--------------------------------"
  puts "[1] Add client details"            
  puts "[2] Add animal details"       
  puts "[3] Display all clients"
  puts "[4] Display all animals"
  puts "[5] Adopt a pet"
  puts "[6] Put animal up for adoption"
  puts "[7] Quit"
  puts "--------------------------------"
  puts "Please choose an option:"
end


while option != 7
  menu
  option = gets.chomp.to_i

# OPTION 1: ADD CLIENTS ====================================================================
  
  if option == 1
    File.open('clients.txt', 'a+') do |file|

      print "Input client details and save to a file (y/n)  "
      response = gets.chomp.downcase

      while response == 'y'

        print "Please enter: name, number of children, age, number of pets  "
        response = gets.chomp

        file.puts(response)


        puts "Adding details into the system. Please wait"
        char_delay(".......................")
        puts ""
        sleep(1)
        puts "Data is stored."
        sleep(2)


      end
    end

    client_list = []

    File.open('clients.txt', 'r') do |file|
      file.each do |line|
        data = line.split(',')
        client = Client.new(data[0], data[1], data[2], data[3])
        client_list << client
      end
    end

# OPTION 2: ADD ANIMALS ======================================================================
  
  elsif option == 2

    File.open('animals.txt', 'a+') do |file|

      print "Input animal details and save to a file (y/n)  "
      response = gets.chomp.downcase

      while response == 'y'

        print "Please enter: name, age, gender, species, toys  "
        response = gets.chomp

        file.puts(response)

        puts "Adding details into the system. Please wait"
        char_delay(".......................")
        puts ""
        sleep(1)
        puts "Data is stored."
        sleep(2)

      end
    end

    animal_list = []

    File.open('animals.txt', 'r') do |file|
      file.each do |line|
        data = line.split(',')
        animal = Animal.new(data[0], data[1], data[2], data[3], data[4])
        animal_list << animal
      end
    end
  

# OPTION 3: DISPLAY CLIENTS ==================================================================
  
  elsif option == 3
    client_list.to_s
    binding.pry

# OPTION 4: DISPLAY ANIMALS ==================================================================
  
  elsif option == 4
    animal_list.to_s

# OPTION 5: ADOPT A PET ======================================================================
  
  # elsif option == 5



# OPTION 7: QUIT =============================================================================

  elsif option == 7
    char_delay("Goodbye...")
    puts ""
    sleep(2)
    exit(0)
  

# ============================================================================================

  end
end

# binding.pry

# Client =  Jack, 2 children, 23, 1 pet

# Animal = Freddie, 2 years old, male, cat, blanket


