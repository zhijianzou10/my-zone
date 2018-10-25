class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true
      t.references :zone, foreign_key: true
      t.references :interest_tag, foreign_key: true
      t.text :content
      t.text :photo
      t.integer :number_of_goods
      t.integer :number_of_shares

      t.timestamps
    end
  end
end
