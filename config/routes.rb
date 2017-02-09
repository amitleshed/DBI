Rails.application.routes.draw do

  root to: 'welcome#index'

  resources :contacts, only: [:new, :create]
  
end
