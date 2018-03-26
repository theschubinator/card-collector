class CardSerializer < ActiveModel::Serializer
  attributes :id, :brand, :year, :first_name, :last_name, :card_number, :value, :rookie, :image_url, :orientation
end
