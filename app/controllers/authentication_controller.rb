class AuthenticationController < ApplicationController

  def authenticate_user
		user = User.find_by(username: params[:user][:username])
    if user.authenticate(params[:user][:password])
      render json: payload(user)
    else
      render json: { error: 'Invalid Username/Password' }, status: :401
    end
	end

end