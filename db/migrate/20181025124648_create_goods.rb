class CreateGoods < ActiveRecord::Migration[5.2]
  def change
    create_table :goods do |t|
      t.references :user, foreign_key: true
      t.references :post, foreign_key: true
      t.boolean :is_good, default: false

      t.timestamps
    end
  end
end
