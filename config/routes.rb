Rails.application.routes.draw do
  devise_for :users
  root 'comments#index'
  resources :users, only: [:edit, :update] do
  end
  resources :groups, only: [:new, :create, :edit, :update] do
  end
end
