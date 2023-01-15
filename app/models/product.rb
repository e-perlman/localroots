class Product < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_many :users, through: :orders

    validates :name, presence: true
    validates :category, presence: true
    validates :store, presence: true
end
