Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => "registrations"}
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/components', to: 'pages#components'

  resources :users do
    resources :zones, only: [:new, :create, :edit, :update, :destroy] do
      resources :zone_tags
    end
    resources :posts
  end
end
