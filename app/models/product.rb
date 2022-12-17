class Product < ApplicationRecord
    validates :name, presence: true
    validates :category, presence: true
    validates :store, presence: true
end
