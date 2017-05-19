class Remove < ActiveRecord::Migration[5.0]
  def change
    change_column :posts, :content, :text, null: true
  end
end
