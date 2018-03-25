class Card < ApplicationRecord
	belongs_to :user

	validates :brand, presence: true
	validates :year, presence: true
	validates :player, presence: true
	validates :card_number, presence: true
end
