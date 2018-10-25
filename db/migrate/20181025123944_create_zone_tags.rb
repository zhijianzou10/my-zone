class CreateZoneTags < ActiveRecord::Migration[5.2]
  def change
    create_table :zone_tags do |t|
      t.references :zone, foreign_key: true
      t.references :interest_tag, foreign_key: true

      t.timestamps
    end
  end
end
