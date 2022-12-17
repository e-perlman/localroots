class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :store
      t.decimal :price, precision: 5, scale: 2
      t.integer :rating

      t.timestamps
    end
  end
end
