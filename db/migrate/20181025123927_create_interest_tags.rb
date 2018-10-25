class CreateInterestTags < ActiveRecord::Migration[5.2]
  def change
    create_table :interest_tags do |t|
      t.text :title
      t.text :photo

      t.timestamps
    end
  end
end
