class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :post_type, null: false
      t.text :content, null: false

      t.timestamps
    end

    add_index :posts, :user_id
  end
end
