class Deck < ApplicationRecord
   has_many :deck_cards
   has_many :cards, through: :deck_cards

   def build_deck
        Card.all.each do |card|
            self.deck_cards << DeckCard.new(:card => card)
        end
        return self.deck_cards
   end
end
