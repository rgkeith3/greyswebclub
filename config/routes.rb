Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy] do
      get 'explore', on: :collection
      get 'user', on: :collection
    end
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :search, only: [:index]
  end
end
