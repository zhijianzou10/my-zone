class AddParamsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :gender, :integer, default: 0
    add_column :users, :avatar_url, :string
  end
end
