Rails.application.routes.draw do
	namespace :api do
		resources :sessions, only: [:create]
		resources :users, only: [:index, :create] do
			resources :cards, only: [:index, :create, :update, :destroy]
		end
		get '/cards', to: 'cards#all'
	end
	post 'auth_user' => 'authentication#authenticate_user'
end
