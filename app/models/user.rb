class User < ApplicationRecord
    has_many :orders
    has_many :products, through: :orders
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
