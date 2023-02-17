Rails.application.routes.draw do
  
  # Make a custom route that takes in a parameter (which is a string) and gets all the orders that have products that have a match in the store attribute. It should be a fuzzy match (case insensitive, any part of the string). Render json for all the orders that have at least one product that meets this description. If no orders match render json that says so.
  
  
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

