class ChangeLongtitudeToLongitude < ActiveRecord::Migration[5.2]
  def change
    rename_column :zones, :longtitude, :longitude
  end
end
