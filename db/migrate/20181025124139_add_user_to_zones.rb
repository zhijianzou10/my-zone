class AddUserToZones < ActiveRecord::Migration[5.2]
  def change
    add_reference :zones, :user, foreign_key: true
  end
end
