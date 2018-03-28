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
		user = User.find(params[:user_id])
		card = Card.new(card_params)
		formatValue(card)
		if user.cards << card
			render json: card
		else
			render json: { errors: card.errors.full_messages }, status: 400
		end
	end

	def update
		card = Card.find(params[:id])
		
		if card.update(card_params)
			formatValue(card)
			card.save
			render json: card
		else
			render json: { error: 'Unable to  Update Card' }, status: 409
		end
	end

	def destroy
		card = Card.find(params[:id])
		if card.delete
			render json: { card_id: card.id }
		else
			render json: { error: 'Unable to Delete Card' }, status: 409
		end
	end

	private
		def card_params
			params.require(:data).permit(:brand, :year, :first_name, :last_name, :card_number, :rookie, :value, :image_url, :orientation)
		end

		def formatValue(card)
			valueAfterDecemal = card.value.split('.')[1]
			if valueAfterDecemal && valueAfterDecemal.length === 1
				card.value += "0"
			elsif !valueAfterDecemal
				card.value += ".00"
			end
		end
end
