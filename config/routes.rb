Rails.application.routes.draw do

  root to: 'welcome#index'
  get 'faq', to: 'welcome#faq'

  resources :contacts, only: [:new, :create]

if Rails.env.development?
  mount Vivus::Engine, at: "styleguide"
end
  
end
