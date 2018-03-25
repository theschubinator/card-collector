Rails.application.routes.draw do
	namespace :api do
		resources :sessions, only: [:create]
		resources :users, only: [:index, :create] do
			resources :cards, only: [:index, :create, :destroy]
		end
	end
	post 'auth_user' => 'authentication#authenticate_user'
end
