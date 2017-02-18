Rails.application.routes.draw do

  root to: 'welcome#index'

  resources :contacts, only: [:new, :create]

if Rails.env.development?
  mount Vivus::Engine, at: "styleguide"
end
  
end
