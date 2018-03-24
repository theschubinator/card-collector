class Api::CardsController < ApplicationController
	def index
		user = User.find(params[:user_id])
		if user
			render json: user.cards
		else
			render json: { error: 'user cannot be found' }, status: 400
		end
	end

	def create
		# binding.pry
		user = User.find(params[:user_id])
		card = Card.new(card_params)
		if user.cards << card
			render json: card
		else
			render json: { error: 'Card Could not be save' } 
		end
	end

	private
		def card_params
			params.require(:data).permit(:brand, :year, :player, :card_number, :rookie, :value, :image_url, :orientation)
		end
end
