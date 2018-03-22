Rails.application.routes.draw do
	namespace :api do
		resources :users, only: [:index, :create]
		resources :sessions, only: [:create]
	end
	post 'auth_user' => 'authentication#authenticate_user'
end
