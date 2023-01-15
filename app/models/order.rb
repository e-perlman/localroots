class Order < ApplicationRecord
    belongs_to :user
    belongs_to :product

    validates :user_id, presence: true
    validates :product_id, presence: true, uniqueness: true
    validates :quantity, numericality: { greater_than: 0}
end

