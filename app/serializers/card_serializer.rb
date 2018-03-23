class CardSerializer < ActiveModel::Serializer
  attributes :id, :brand, :year, :player, :card_number, :value, :rookie, :image_url
end
