Rails.application.routes.draw do
  get 'index/index'
  devise_for :users

  get '/index', to: 'index#index'
end
