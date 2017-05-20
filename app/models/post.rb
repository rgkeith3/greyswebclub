# == Schema Information
#
# Table name: posts
#
#  id                      :integer          not null, primary key
#  user_id                 :integer          not null
#  post_type               :string           not null
#  content                 :text
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  attachment_file_name    :string
#  attachment_content_type :string
#  attachment_file_size    :integer
#  attachment_updated_at   :datetime
#

class Post < ApplicationRecord
  validates :user_id, :post_type, presence: true

  has_attached_file :attachment, default_url: 'missing.jpg'

  validates_attachment :attachment,
  content_type: { content_type: ['image/jpeg', 'image/gif', 'image/png', 'audio/mp3', 'video/mp4']}

  belongs_to :user
  has_many :likes
  has_many :likers, through: :likes, source: :user
end
