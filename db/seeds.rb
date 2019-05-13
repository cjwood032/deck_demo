# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
DATA = {
    :card_keys =>
      ["suit", "value"],
    :cards => [
      ["spade", "A"],
      ["spade", "2"],
      ["spade", "3"],
      ["spade", "4"],
      ["spade", "5"],
      ["spade", "6"],
      ["spade", "7"],
      ["spade", "8"],
      ["spade", "9"],
      ["spade", "10"],
      ["spade", "J"],
      ["spade", "Q"],
      ["spade", "K"],
      ["diamond", "A"],
      ["diamond", "2"],
      ["diamond", "3"],
      ["diamond", "4"],
      ["diamond", "5"],
      ["diamond", "6"],
      ["diamond", "7"],
      ["diamond", "8"],
      ["diamond", "9"],
      ["diamond", "10"],
      ["diamond", "J"],
      ["diamond", "Q"],
      ["diamond", "K"],
      ["club", "A"],
      ["club", "2"],
      ["club", "3"],
      ["club", "4"],
      ["club", "5"],
      ["club", "6"],
      ["club", "7"],
      ["club", "8"],
      ["club", "9"],
      ["club", "10"],
      ["club", "J"],
      ["club", "Q"],
      ["club", "K"],
      ["heart", "A"],
      ["heart", "2"],
      ["heart", "3"],
      ["heart", "4"],
      ["heart", "5"],
      ["heart", "6"],
      ["heart", "7"],
      ["heart", "8"],
      ["heart", "9"],
      ["heart", "10"],
      ["heart", "J"],
      ["heart", "Q"],
      ["heart", "K"]
    ]
}
def main
  make_cards
end
def make_cards
  DATA[:cards].each do |card|
    new_card = Card.new
    card.each_with_index do |attribute, i|
      new_card.send(DATA[:card_keys][i]+"=", attribute)
    end
    new_card.save
  end
end
main