require 'pry'
# binding.pry

def char_delay(var)

  var.each_char do |c|
    sleep 0.08
    print c
  end
end

  char_delay("LOADING CALCULATOR")
  puts ""
  char_delay("...........")
  puts ""
  sleep(0.8)

function = " "

while function != 7

  puts "-------------------"
  puts "       MENU"
  puts "-------------------"
  puts "[1] Add"            
  puts "[2] Subtract"       
  puts "[3] Multiply"
  puts "[4] Divide"
  puts "[5] Exponent"
  puts "[6] Square Root"
  puts "[7] Quit"
  puts "-------------------"
  puts "Choose a function:"

  function = gets.chomp.to_i

  if function == 7
    char_delay("Quitting Calculator")
    exit(0)
    sleep(1)
  end

  puts "Enter the first value"
  num1 = gets.chomp.to_i

  puts "Enter the second value"
  num2 = gets.chomp.to_i


def calculate(function, num1, num2)
    if function == 1
      result = num1 + num2
      sleep(0.8)
      puts "-------------------"
      puts "#{num1} + #{num2} = #{result}"
      sleep(0.8)
    elsif function == 2
      result = num1 - num2
      sleep(0.8)
      puts "-------------------"
      puts "#{num1} - #{num2} = #{result}"
      sleep(0.8)
    elsif function == 3
      result = num1 * num2
      sleep(0.8)
      puts "-------------------"
      puts "#{num1} * #{num2} = #{result}"
      sleep(0.8)
    elsif function == 4
      result = num1 / num2
      sleep(0.8)
      puts "-------------------"
      puts "#{num1} / #{num2} = #{result}"
      sleep(0.8)
    elsif function == 5
      result = num1**num2
      sleep(0.8)
      puts "-------------------"
      puts "#{num1}^#{num2} = #{result}"
      sleep(0.8)
    elsif function == 6
      result = num1**0.5
      sleep(0.8)
      puts "-------------------"
      puts "Square root of #{num1} = #{result}"
      sleep(0.8)
    else
      puts "Please specify the correct function."
    end
  end
  calculate(function, num1, num2)
  sleep(1.5)
end

  

# WORKING IF STATEMENT:
#   puts "------------------"
#   puts "CALCULATOR MENU"
#   puts "------------------"
#   puts "[+] Add"
#   puts "[-] Subtract"
#   puts "[*] Multiply"
#   puts "[/] Divide"
#   puts "[^] Exponent"
#   puts "[^1/2] Square Root"
#   puts "[Q] Quit"
#   puts "------------------"
#   function = gets.chomp

#   puts "Enter the first value"
#   num1 = gets.chomp.to_i

#   puts "Enter the second value"
#   num2 = gets.chomp.to_i



# def calculate(function, num1, num2)
#   if function == '+'
#     result = num1 + num2
#     puts "#{num1} + #{num2} = #{result}"
#   elsif function == '-'
#     result = num1 - num2
#     puts "#{num1} - #{num2} = #{result}"
#   elsif function == '*'
#     result = num1 * num2
#     puts "#{num1} * #{num2} = #{result}"
#   elsif function == '/'
#     result = num1 / num2
#     puts "#{num1} / #{num2} = #{result}"
    
#   elsif function == 'q'
#     return
#   else
#     puts "Please specify the correct function/value."
#   end
# end

# calculate(function, num1, num2)





# DEAD CODE
# def sleep
#   "..............".each_char do |c|
#   sleep 0.1
#   print c
#   end
# end


  # if function <= 5
  #   puts "Enter the first value"
  #   num1 = gets.chomp.to_i
  #   puts "Enter the second value"
  #   num2 = gets.chomp.to_i
  #   return
  # else function == 6
  #   puts "Enter a value"
  #   num1 = gets.chomp.to_i
  #   return
  # else function == 7
  #   return
  # end
