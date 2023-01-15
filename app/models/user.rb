class User < ApplicationRecord
    has_many :orders, dependent: :destroy
    has_many :products, through: :orders
    has_secure_password
    validates :username, presence: true, uniqueness: true

    def order_sum
        self.orders.sum(:total)
    end
end
