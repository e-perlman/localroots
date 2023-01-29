class OrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :user_id, :product_id
  belongs_to :product
end
