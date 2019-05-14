class Api::DecksController < ApplicationController
    before_action :set_deck, only: [:draw]
    def create
        @deck=Deck.new
        if @deck.save
            @deck.build_deck
            @deck.save
            render json: @deck
        end
    end
    def index
    end
    def draw
        @cards=@deck.cards.shuffle.pop(5) #change the number if you want to draw a different amount
        render json: @cards
    end
end
private
def set_deck
    @deck=Deck.find(params[:deck_id])
end
