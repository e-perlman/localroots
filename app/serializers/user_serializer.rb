class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio
  has_many :orders
  has_many :products
end
