Rails.application.routes.draw do
  
  namespace :api do
    resources :decks do
      get "/draw", to: "decks#draw"
    end
  end
end
