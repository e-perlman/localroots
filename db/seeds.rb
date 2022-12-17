require 'faker'

User.destroy_all
Product.destroy_all

10.times do
    Product.create(
        name: Faker::Commerce.product_name,
        category: Faker::Commerce.department(max: 2),
        store: Faker::Commerce.vendor,
        price: Faker::Number.between(from: 0.0, to: 1000.0),
        rating: Faker::Number.between(from: 1, to: 10)
    )
end



