class Api::SessionsController < ApplicationController
	def create
		user = User.find_by(username: params[:user][:username])
		if user
			if user.authenticate(params[:user][:password])
				render json: user
			else
				render json: { error: 'Invalid Password, Please Try Again' }
			end
		else
			render json: { error: 'User does not exist' }
		end
	end
end
