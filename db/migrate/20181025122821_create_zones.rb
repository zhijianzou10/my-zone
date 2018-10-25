class CreateZones < ActiveRecord::Migration[5.2]
  def change
    create_table :zones do |t|
      t.float :latitude
      t.float :longtitude
      t.integer :radius
      t.text :title
      t.text :address

      t.timestamps
    end
  end
end
