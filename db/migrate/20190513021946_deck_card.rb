class DeckCard < ActiveRecord::Migration[5.2]
  def change
    create_table :deck_cards do |t|
    t.integer :deck_id
    t.integer :card_id
    end
  end
end
