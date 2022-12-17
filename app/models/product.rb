class Product < ApplicationRecord
    validates :title, presence: true
    validates :category, presence: true
    validates :store, presence: true
end
