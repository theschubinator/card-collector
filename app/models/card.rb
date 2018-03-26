class Card < ApplicationRecord
	belongs_to :user

	validates :brand, presence: true
	validates :year, presence: true
	validates :first_name, presence: true
	validates :last_name, presence: true
	validates :card_number, presence: true
end
