class AuthenticationController < ApplicationController

	def authenticate_user
		if params[:user].is_a? String
			authenticate_user_by_token
		else
			authenticate_user_by_password
		end
	end

	private
		def authenticate_user_by_token
			token = params[:user]
			user = User.find(JsonWebToken.decode(token)['user_id'])
			if user
				render json: payload(user)
			else
				render json: { error: 'Invalid Web Token' }, status: 401
			end
		end

		def authenticate_user_by_password
			user = User.find_by(username: params[:user][:username])
			if user && user.authenticate(params[:user][:password])
				render json: payload(user)
			else
				render json: { error: 'Invalid Username/Password' }, status: 401
			end
		end

end