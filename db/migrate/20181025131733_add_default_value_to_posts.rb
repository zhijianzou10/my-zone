class AddDefaultValueToPosts < ActiveRecord::Migration[5.2]
  def up
    change_column :posts, :number_of_goods, :integer, default: 0
    change_column :posts, :number_of_shares, :integer, default: 0
  end

  def down
    change_column :posts, :number_of_goods, :integer, default: nil
    change_column :posts, :number_of_shares, :integer, default: nil
  end
end
