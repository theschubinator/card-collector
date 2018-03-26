class AddLastNameToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :last_name, :string
  end
end
