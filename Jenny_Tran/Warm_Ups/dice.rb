class Dice

  def roll(num)
    arr = (1..6).to_a
    arr.sample(num)
  end

  def pretty_roll(num)
    dash = {
      1 => '*',
      2 => '* *',
      3 => '* * *',
      4 => '* * * *',
      5 => '* * * * *',
      6 => '* * * * * *'
    }
    rolled = Dice.roll(num)[0]
    dash[rolled]

  end
end

Dice.roll(2)


