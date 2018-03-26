class RenamePlayerInCards < ActiveRecord::Migration[5.1]
	def change
		rename_column :cards, :player, :first_name
  end
end
