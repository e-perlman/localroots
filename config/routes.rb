Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # /orders? key1=value1&key2=value2
  #Login,SignUp, Routes
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  # get "/orders/:store", to: "orders#store"

  # get "/orders/:number", to:"orders#value"

  #My Products Routes
  get "/myitems", to: "products#myproducts"

  #Products Routes
  resources :products, only:[:index, :create]

  #Orders Routes
  resources :orders, only:[:index, :create, :update, :destroy]
end

