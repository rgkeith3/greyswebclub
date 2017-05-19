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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
