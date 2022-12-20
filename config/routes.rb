Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #Login,SignUp, Routes
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  #Products Routes
  resources :products, only:[:index, :create, :show, :destroy]

  #Orders Routes
  resources :products, only:[:create, :destroy]
end
