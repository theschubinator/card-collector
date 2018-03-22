class UserSerializer < ActiveModel::Serializer
	has_many :cards
	attributes :id, :username
end
