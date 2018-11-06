class AddBackgroundUrlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :background_url, :string
  end
end
