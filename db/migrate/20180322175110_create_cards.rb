class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :brand
			t.string :year
			t.string :player
			t.string :card_number
			t.string :value
			t.boolean :rookie, default: false
      t.timestamps
    end
  end
end
