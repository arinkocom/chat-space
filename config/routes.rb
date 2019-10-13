Rails.application.routes.draw do
  # # get 'users' : 'users#index'
  # get 'groups' : 'groups#index'
  # get 'groups' : 'groups#new'
  # get 'groups' : 'groups#create'
  devise_for :users
  root 'comments#index'
  resources :users, only: [:edit, :update] do
  end
  resources :groups, only: [:new, :create, :edit, :update] do
  end
end
