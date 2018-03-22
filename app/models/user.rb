class User < ApplicationRecord
	has_secure_password
	has_many :cards

	validates :username, presence: true
	validates :username, uniqueness: true
	validates :password, presence: true
	validates :password, confirmation: true
end
