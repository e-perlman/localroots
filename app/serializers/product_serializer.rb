class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :store, :price, :rating
end
