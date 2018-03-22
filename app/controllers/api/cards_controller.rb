class Api::CardsController < ApplicationController
	def index
		user = User.find(params[:user_id])
		if user
			render json: user.cards
		else
			render json: { error: 'user cannot be found' }, status: 400
		end
	end
end
