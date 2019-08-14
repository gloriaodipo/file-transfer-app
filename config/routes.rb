Rails.application.routes.draw do
  root to: 'documents#index'
  devise_for :users
  
  resources :documents, only: %i[index show create new]
  get '/index', to: "index#index"
end
