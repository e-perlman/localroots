class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :quantity
      t.decimal :total
      t.integer :user_id
      t.integer :product_id

      t.timestamps
    end
  end
end
